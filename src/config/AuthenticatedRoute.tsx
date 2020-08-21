// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File import ======================================
import { getStatus } from "../redux/actions/AuthActions";
import { getOrganization } from "../redux/actions/OrganizationActions";
import AppState from "../redux/types";
import Loading from "../pages/Loading";
import Organization from "../pages/Organization";

interface Props extends HashRouterProps {
   status: number;
   getStatus: () => any;
   getOrganization: () => any;
   orgnizationDetails: object;
}

const UnauthenticatedRoute = (props: Props) => {
   const [loading, setLoading] = useState(true);
   const { status, getStatus, getOrganization, orgnizationDetails } = props;

   useEffect(() => {
      const api = async () => {
         setLoading(true);
         await getStatus();
         await getOrganization();
         setLoading(false);
      };
      api();
   }, [status, getStatus, getOrganization]);

   console.log("orgnizationDetails ---> ", orgnizationDetails);

   return loading ? (
      <Loading />
   ) : (
      <HashRouter>
         {status === 2 && <h1>Side bar</h1>}
         <Switch>
            <Route exact path="/" component={Organization} />
         </Switch>
      </HashRouter>
   );
};

const mapStateToProps = (state: AppState) => ({
   status: state.auth.status,
   orgnizationDetails: state.orgnizationReducer.details,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getStatus, getOrganization }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(UnauthenticatedRoute);
