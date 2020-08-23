// ====================================== Module imports ======================================
import React, { useState } from "react";
import { withRouter, RouteProps } from "react-router-dom";
import { colors } from "@atlaskit/theme";
import PreferencesIcon from "@atlaskit/icon/glyph/preferences";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";
import Button from "@atlaskit/button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ========================================
import { logout } from "../redux/actions/UserActions";
import AppState from "../redux/types";
import { UserState } from "../redux/types/UserTypes";

// ========================================= Interface ========================================
interface Props extends RouteProps, UserState {
   logout: () => any;
}

const styles: {
   container: object;
   titleBar: object;
   menuBar: object;
   titleDiv: object;
} = {
   container: {
      display: "flex",
      flexDirection: "row",
      flex: 1,
      height: "100%",
   },
   titleBar: {
      background: colors.N800A,
      color: colors.N0,
      width: 55,
      height: "100%",
      display: "flex",
   },
   menuBar: {
      background: colors.N20,
      display: "flex",
      flex: 1,
      height: "100%",
   },
   titleDiv: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      paddingTop: 20,
      paddingBottom: 20,
      alignItems: "center",
   },
};

const SideBar = (props: Props) => {
   const [isLogout, setIsLogout] = useState<boolean>(false);
   const exacttLogo = require("../assets/images/exactt_w.png");
   return (
      <div style={styles.container}>
         <div style={{ ...styles.titleBar, justifyContent: "center" }}>
            <div style={styles.titleDiv}>
               <div>
                  <img src={exacttLogo} style={{ width: 30 }} alt="exactt_logo" />
               </div>
               <div>
                  <Button style={{ color: colors.N0 }} appearance="link">
                     <PreferencesIcon label="New" primaryColor={colors.N0} />
                  </Button>
                  <Button
                     style={{ color: colors.N0 }}
                     appearance="link"
                     onClick={async () => {
                        setIsLogout(true);
                        await props.logout();
                     }}
                     isLoading={isLogout}
                  >
                     <SignOutIcon label="New" primaryColor={colors.N0} />
                  </Button>
               </div>
            </div>
         </div>
         <div style={styles.menuBar}>b</div>
      </div>
   );
};

const mapStateToProps = (state: AppState) => ({
   user: state.user.user,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ logout }, dispatch),
   };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar));
