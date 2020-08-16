import React from "react";
import { HashRouter, Route, Switch, HashRouterProps } from "react-router-dom";
import Signup from "../pages/signup";
import Login from "../pages/login";

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
