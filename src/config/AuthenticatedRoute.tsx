// ====================================== Module imports ======================================
import React from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";

// ====================================== File import ======================================
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

export default UnauthenticatedRoute;
