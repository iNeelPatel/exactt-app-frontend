// ====================================== Module imports ======================================
import React from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import AppState from "../redux/types";
import Loading from "../pages/Loading";
import Organization from "../pages/Organization";

interface Props extends HashRouterProps {}

const UnauthenticatedRoute = (props: Props) => {
   return (
      <HashRouter>
         <h1>Side bar</h1>
         <Switch>
            <Route exact path="/" component={Organization} />
         </Switch>
      </HashRouter>
   );
};

const mapStateToProps = (state: AppState) => ({
   user: state.home.user,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getStatus }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedRoute);
