// ====================================== Module imports ======================================
import React, { useState, useEffect, Fragment } from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import { logout } from "../redux/actions/UserActions";
import { getOrganization } from "../redux/actions/OrganizationActions";
import { getProfile } from "../redux/actions/UserActions";
import AppState from "../redux/types";
import Loading from "../pages/Loading";
import Organization from "../pages/Organization";
import { SideBar, Box, AlertBox } from "../components";

// ====================================== Page import ======================================
import Dashboard from "../pages/Dashboard";
import Role from "../pages/Role";
import Department from "../pages/Department";
import PageNotFound from "../pages/Errors/PageNotFound";
import User from "../pages/User";
import AddUser from "../pages/User/AddUser";
import Customer from "../pages/Customer";
import AddCustomer from "../pages/Customer/AddCustomer";

interface Props extends HashRouterProps {
   status: number;
   getStatus: () => any;
   getOrganization: () => any;
   logout: () => any;
   getProfile: () => any;
   orgnizationDetails: object;
   user: any;
}

const AuthenticatedRoute = (props: Props) => {
   const [loading, setLoading] = useState(true);
   const { status, getStatus, getOrganization, logout, getProfile } = props;
   const { permission } = props.user.role;

   useEffect(() => {
      const api = async () => {
         setLoading(true);
         try {
            await getStatus();
            await getOrganization();
            await getProfile();
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
   }, [status, getStatus, getOrganization, logout, getProfile]);

   const organizationsettingsAccess: any =
      permission?.user?.read ||
      permission?.user?.write ||
      permission?.department?.read ||
      permission?.department?.write ||
      permission?.role?.read ||
      permission?.role?.write;

   interface Permission {
      read: boolean;
      write: boolean;
   }

   const checkPermission = (permission: Permission): boolean => {
      if (permission.read || permission.write) {
         return true;
      } else {
         return false;
      }
   };

   return loading ? (
      <Loading />
   ) : (
      <div style={{ display: "flex", flex: 1, flexDirection: "column", height: "100%" }}>
         <AlertBox />
         <HashRouter>
            <div className="mainBox" style={{ display: "flex", flexDirection: "row", flex: 1, height: "100%" }}>
               {status === 2 && (
                  <div style={{ minWidth: 320, maxWidth: 320 }}>
                     <SideBar />
                  </div>
               )}
               <Box
                  elevation="e300"
                  style={{
                     display: "flex",
                     flex: 1,
                     paddingTop: 20,
                     paddingLeft: 50,
                     paddingRight: 50,
                     margin: 0,
                     borderRadius: 0,
                     textAlign: "left",
                     overflow: "scroll",
                  }}
               >
                  <Switch>
                     <Route exact path="/" component={status === 2 ? Dashboard : Organization} />
                     {checkPermission(permission.customer) && (
                        <Fragment>
                           <Route exact path="/customer" component={Customer} />
                           {permission.customer.write && <Route exact path="/customer/add" component={AddCustomer} />}
                           {permission.customer.write && <Route exact path="/customer/edit/:customerId" component={AddCustomer} />}
                        </Fragment>
                     )}

                     {organizationsettingsAccess && (
                        <Fragment>
                           {checkPermission(permission.role) && <Route exact path="/organizationsettings/role" component={Role} />}
                           {checkPermission(permission.department) && <Route exact path="/organizationsettings/department" component={Department} />}
                           {checkPermission(permission.user) && <Route exact path="/organizationsettings/user" component={User} />}
                           {permission.user.write && <Route exact path="/organizationsettings/user/add" component={AddUser} />}
                           {permission.user.write && <Route exact path="/organizationsettings/user/edit/:userId" component={AddUser} />}
                        </Fragment>
                     )}
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
   user: state.user.user,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getStatus, getOrganization, getProfile, logout }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedRoute);
