// ====================================== Module imports ======================================
import React from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";

// ====================================== File import ======================================
import Login from "../pages/login";

interface Props extends HashRouterProps {}

const UnauthenticatedRoute = (props: Props) => {
   return (
      <HashRouter>
         <Switch>
            <Route exact path="/" component={Login} />
         </Switch>
      </HashRouter>
   );
};

export default UnauthenticatedRoute;
