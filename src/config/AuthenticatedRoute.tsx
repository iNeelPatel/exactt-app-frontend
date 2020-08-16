// ====================================== Module imports ======================================
import React from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";

// ====================================== File import ======================================
import Signup from "../pages/Signup";
import Login from "../pages/Login";

interface Props extends HashRouterProps {}

const UnauthenticatedRoute = (props: Props) => {
   return (
      <HashRouter>
         <Signup />
         <Switch>
            <Route exact path="/" component={Login} />
         </Switch>
      </HashRouter>
   );
};

export default UnauthenticatedRoute;
