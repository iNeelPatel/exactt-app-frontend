// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import AppState from "../redux/types";
import Loading from "../pages/Loading";
import Organization from "../pages/Organization";

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
         let res = await getStatus();
         console.log(res);
         setLoading(false);
      };
      api();
   }, [status, getStatus]);

   return loading ? (
      <Loading />
   ) : (
      <HashRouter>
         <h1>Side bar</h1>
         <Switch>
            <Route exact path="/" component={Organization} />
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
