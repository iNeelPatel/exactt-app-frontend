// ====================================== Module imports ======================================
import React from "react";

// ====================================== File imports ======================================
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

const Navigation = () => {
   const user = true;
   return user ? <AuthenticatedRoute /> : <UnauthenticatedRoute />;
};

export default Navigation;
