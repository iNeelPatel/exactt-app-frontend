// ====================================== Module imports ======================================
import React, { useEffect } from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import AppState from "../redux/types";
import Login from "../pages/Login";

interface Props extends HashRouterProps {
   status: number;
   getStatus: () => any;
}

const UnauthenticatedRoute = (props: Props) => {
   const { status } = props;
   useEffect(() => {
      props.getStatus();
      console.log(status);
   }, [props, status]);

   return (
      <HashRouter>
         <Switch>
            <Route exact path="/" component={Login} />
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
