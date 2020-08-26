// ====================================== Module imports ======================================
import React from "react";
import Spinner from "@atlaskit/spinner";

const ScreenLoader = () => {
   return (
      <div
         style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <Spinner size="large" />
      </div>
   );
};

export default ScreenLoader;
