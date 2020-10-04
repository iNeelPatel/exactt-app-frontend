// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { PreviewProps } from "./types";

const Preview = (props: PreviewProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn>Preview</GridColumn>
         </Grid>
      </Page>
   );
};

export default Preview;
