// ====================================== Module imports ======================================
import React from "react";
import { colors } from "@atlaskit/theme";
import Spinner from "@atlaskit/spinner";

// ====================================== Component Render ======================================
const Loading = () => {
   const exactt_logo = require("../../assets/images/exactt_logo.png");
   return (
      <div
         style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            flex: 1,
            background: colors.N10,
            alignItems: "center",
            justifyContent: "center",
         }}
      >
         <img src={exactt_logo} style={{ width: 180, marginBottom: 30 }} alt="exactt-logo" />
         <Spinner size="medium" />
         <div style={{ position: "absolute", bottom: 50, color: colors.N100 }}>Exactt Laboratory Information Management Software</div>
      </div>
   );
};

export default Loading;
