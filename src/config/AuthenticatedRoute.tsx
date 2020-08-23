// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import { logout } from "../redux/actions/UserActions";
import { getOrganization } from "../redux/actions/OrganizationActions";
import AppState from "../redux/types";
import Loading from "../pages/Loading";
import Organization from "../pages/Organization";
import { SideBar, Box } from "../components";

// ====================================== Page import ======================================
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/Errors/PageNotFound";

interface Props extends HashRouterProps {
   status: number;
   getStatus: () => any;
   getOrganization: () => any;
   logout: () => any;
   orgnizationDetails: object;
}

const UnauthenticatedRoute = (props: Props) => {
   const [loading, setLoading] = useState(true);
   const { status, getStatus, getOrganization, logout } = props;

   useEffect(() => {
      const api = async () => {
         setLoading(true);
         try {
            await getStatus();
            await getOrganization();
         } catch (error) {
            if (error.code === 209) {
               await logout();
            }
            if (error.code === 100) {
               alert("Internet is not connected ");
            }
         } finally {
            setLoading(false);
         }
      };
      api();
   }, [status, getStatus, getOrganization, logout]);

   return loading ? (
      <Loading />
   ) : (
      <div style={{ height: "100%" }}>
         <HashRouter>
            <div className="mainBox" style={{ display: "flex", flexDirection: "row", flex: 1, height: "100%" }}>
               {status === 2 && (
                  <div style={{ minWidth: 320, maxWidth: 320 }}>
                     <SideBar />
                  </div>
               )}
               <Box
                  elevation="e300"
                  style={{ display: "flex", flex: 1, paddingTop: 20, paddingLeft: 50, paddingRight: 50, margin: 0, borderRadius: 0 }}
               >
                  <Switch>
                     <Route exact path="/" component={status === 2 ? Dashboard : Organization} />
                     <Route component={PageNotFound} />
                  </Switch>
               </Box>
            </div>
         </HashRouter>
      </div>
   );
};

const mapStateToProps = (state: AppState) => ({
   status: state.auth.status,
   orgnizationDetails: state.orgnization.details,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getStatus, getOrganization, logout }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedRoute);
