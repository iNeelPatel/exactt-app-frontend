// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Parse from "parse";

// ====================================== File imports ======================================
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";

const Navigation = () => {
   const [user, setUser] = useState<any>(undefined);
   useEffect(() => {
      setUser(Parse.User.current());
   }, []);

   return user ? <AuthenticatedRoute /> : <UnauthenticatedRoute />;
};

export default Navigation;
