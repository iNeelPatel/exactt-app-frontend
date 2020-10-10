// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
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
import TestGroup from "../pages/TestGroup";
import AddTestGroup from "../pages/TestGroup/AddTestGroup";
import Parameter from "../pages/Parameter";
import AddParameter from "../pages/Parameter/AddParameter";
import TestMethod from "../pages/TestMethod";
import AddTestMethod from "../pages/TestMethod/AddTestMethod";
import SampleDetails from "../pages/SampleDetails";
import AddSampleDetails from "../pages/SampleDetails/AddSampleDetails";
import CustomerDetails from "../pages/Customer/CustomerDetails";
import Sample from "../pages/Samples";
import AddSample from "../pages/Samples/AddSample";
import SampleInfoDetails from "../pages/Samples/Details";

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
                  <div style={{ minWidth: 290, maxWidth: 290 }}>
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
                     {checkPermission(permission.customer) && <Route exact path="/customer" component={Customer} />}
                     {checkPermission(permission.customer) && <Route exact path="/customer/details/:customerId" component={CustomerDetails} />}
                     {permission.customer.write && <Route exact path="/customer/add" component={AddCustomer} />}
                     {permission.customer.write && <Route exact path="/customer/edit/:customerId" component={AddCustomer} />}
                     {checkPermission(permission.role) && <Route exact path="/organizationsettings/role" component={Role} />}
                     {checkPermission(permission.department) && ( <Route exact path="/organizationsettings/department" component={Department} />)}
                     {checkPermission(permission.user) && <Route exact path="/organizationsettings/user" component={User} />}
                     {permission.user.write && <Route exact path="/organizationsettings/user/add" component={AddUser} />}
                     {permission.user.write && <Route exact path="/organizationsettings/user/edit/:userId" component={AddUser} />}
                     
                     {checkPermission(permission.samples_group) && <Route exact path="/organizationsettings/testgroup" component={TestGroup} />}
                     {permission.samples_group.write && <Route exact path="/organizationsettings/testgroup/add" component={AddTestGroup} />}
                     {permission.samples_group.write && <Route exact path="/organizationsettings/testgroup/edit/:groupId" component={AddTestGroup} />}

                     {checkPermission(permission.samples_group) && <Route exact path="/organizationsettings/parameter" component={Parameter} />}
                     {permission.samples_group.write && <Route exact path="/organizationsettings/parameter/add" component={AddParameter} />}
                     {permission.samples_group.write && <Route exact path="/organizationsettings/parameter/edit/:parameterId" component={AddParameter} />}

                     {checkPermission(permission.samples_method) && <Route exact path="/organizationsettings/testmethod" component={TestMethod} />}
                     {permission.samples_method.write && <Route exact path="/organizationsettings/testmethod/add" component={AddTestMethod} />}
                     {permission.samples_method.write && <Route exact path="/organizationsettings/testmethod/edit/:testMethodId" component={AddTestMethod} />}

                     {checkPermission(permission.samples_sample) && <Route exact path="/organizationsettings/sampledetail" component={SampleDetails} />}
                     {permission.samples_sample.write && <Route exact path="/organizationsettings/sampledetail/add" component={AddSampleDetails} />}
                     {permission.samples_sample.write && <Route exact path="/organizationsettings/sampledetail/edit/:sampleDetailId" component={AddSampleDetails} />}

                     {checkPermission(permission.samples_id) && <Route exact path="/sample" component={Sample} />}
                     {checkPermission(permission.samples_id) && <Route exact path="/sample/id/:sampleId" component={SampleInfoDetails} />}
                     {permission.samples_id.write && <Route exact path="/sample/add" component={AddSample} />}
                     {permission.samples_id.write && <Route exact path="/sample/edit/:sampleId" component={AddSample} />}

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
