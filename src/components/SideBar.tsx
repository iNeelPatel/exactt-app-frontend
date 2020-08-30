// ====================================== Module imports ======================================
import React, { useState } from "react";
import { withRouter, RouteProps } from "react-router-dom";
import { colors, typography } from "@atlaskit/theme";
import PreferencesIcon from "@atlaskit/icon/glyph/preferences";
import SignOutIcon from "@atlaskit/icon/glyph/sign-out";
import Button from "@atlaskit/button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Avatar from "@atlaskit/avatar";
import { MenuGroup, Section, LinkItem } from "@atlaskit/menu";

// ====================================== File imports ========================================
import { logout } from "../redux/actions/UserActions";
import AppState from "../redux/types";
import { UserState } from "../redux/types/UserTypes";
import { OrganizationState } from "../redux/types/OrganizationTypes";
import { Divider, Heading } from "./";

// ========================================= Interface ========================================
interface Props extends RouteProps, UserState, OrganizationState {
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
      maxWidth: 320,
   },
   titleBar: {
      background: colors.N800A,
      color: colors.N0,
      maxWidth: 55,
      minWidth: 55,
      height: "100%",
      display: "flex",
   },
   menuBar: {
      background: colors.N20,
      display: "flex",
      flexDirection: "column",
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

   const pathName = props.location?.pathname;

   const menuItemCss = (currentStyles: any, path: any) => {
      return {
         ...currentStyles,
         borderRadius: 3,
         ...(path === pathName && { backgroundColor: colors.N40 }),
         "&:hover": {
            backgroundColor: colors.N30,
            textDecoration: "none",
         },
      };
   };

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
         <div style={styles.menuBar}>
            <div style={{ margin: 10 }}>
               <Heading mixin={typography.h400} style={{ marginTop: 8 }}>
                  {props.details.name}
               </Heading>
               <Divider />
               <div style={{ display: "flex", flexDirection: "row" }}>
                  <Avatar
                     size="large"
                     appearance="square"
                     src={`https://ui-avatars.com/api/?background=0052cc&color=fff&name=${props.user.name.split(" ")[0]}${
                        props.user.name.split(" ")[1] ? "+" + props.user.name.split(" ")[1] : ""
                     }`}
                  />
                  <div style={{ marginLeft: 5, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                     <Heading mixin={typography.h400} style={{ marginTop: 0, maxWidth: `120` }}>
                        {props.user.name}
                     </Heading>
                     <Heading mixin={typography.h100} style={{ marginTop: 0, textTransform: "capitalize" }}>
                        {/* {props.user.role} */}
                     </Heading>
                  </div>
               </div>
               <Divider />
               <MenuGroup>
                  <Section>
                     <LinkItem href="#/" cssFn={(currentStyles) => menuItemCss(currentStyles, "/")}>
                        Dashboard
                     </LinkItem>
                     <LinkItem href="#/test" cssFn={(currentStyles) => menuItemCss(currentStyles, "/test")}>
                        Test
                     </LinkItem>
                  </Section>
                  <Section title="Organization Settings">
                     <LinkItem
                        href="#/organizationsettings/role"
                        cssFn={(currentStyles) => menuItemCss(currentStyles, "/organizationsettings/role")}
                     >
                        Role
                     </LinkItem>
                     <LinkItem
                        href="#/organizationsettings/department"
                        cssFn={(currentStyles) => menuItemCss(currentStyles, "/organizationsettings/department")}
                     >
                        Department
                     </LinkItem>
                  </Section>
               </MenuGroup>
            </div>
         </div>
      </div>
   );
};

const mapStateToProps = (state: AppState) => ({
   user: state.user.user,
   details: state.orgnization.details,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ logout }, dispatch),
   };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SideBar));
