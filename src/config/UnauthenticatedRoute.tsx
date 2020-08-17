// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import AppState from "../redux/types";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Loading from "../pages/Loading";

interface Props extends HashRouterProps {
   status: number;
   getStatus: () => any;
}

const UnauthenticatedRoute = (props: Props) => {
   const [loading, setLoading] = useState(true);
   const { status, getStatus } = props;

   useEffect(() => {
      const api = async () => {
         setLoading(true);
         await getStatus();
         setLoading(false);
      };
      api();
   }, [status, getStatus]);

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
      ...bindActionCreators({ getStatus }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedRoute);
