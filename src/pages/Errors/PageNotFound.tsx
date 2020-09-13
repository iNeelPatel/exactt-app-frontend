// ====================================== Module imports ======================================
import React from "react";
import { colors, typography } from "@atlaskit/theme";
import Button from "@atlaskit/button";
import { RouteComponentProps } from "react-router-dom";

// ====================================== File imports ====================================
import { Heading } from "../../components";

interface Props extends RouteComponentProps {}

const PageNotFound = (props: Props) => {
   return (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, alignItems: "center" }}>
         <div style={{ fontSize: 120 }}>
            <span>4</span>
            <span style={{ color: colors.B300 }}>0</span>
            <span>4</span>
         </div>
         <Heading mixin={typography.h500} style={{ marginTop: 0 }}>
            Error! Page not found.
         </Heading>
         <Button appearance="link" onClick={() => props.history.push("/")}>
            Go to home
         </Button>
      </div>
   );
};

export default PageNotFound;
