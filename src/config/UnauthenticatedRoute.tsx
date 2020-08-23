// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import { logout } from "../redux/actions/UserActions";
import AppState from "../redux/types";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Loading from "../pages/Loading";

interface Props extends HashRouterProps {
   status: number;
   getStatus: () => any;
   logout: () => any;
}

const UnauthenticatedRoute = (props: Props) => {
   const [loading, setLoading] = useState(true);
   const { status, getStatus, logout } = props;

   useEffect(() => {
      const api = async () => {
         setLoading(true);
         try {
            await getStatus();
         } catch (error) {
            if (error.code === 209) {
               await logout();
            }
            if (error.code === 100) {
               alert("Internet is not connected ");
            }
         }
         setLoading(false);
      };
      api();
   }, [status, getStatus, logout]);

   return loading ? (
      <Loading />
   ) : (
      <HashRouter>
         <Switch>
            <Route exact path="/" component={status === 0 ? Signup : Login} />
         </Switch>
      </HashRouter>
   );
};

const mapStateToProps = (state: AppState) => ({
   status: state.auth.status,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getStatus, logout }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedRoute);
