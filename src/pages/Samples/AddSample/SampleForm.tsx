// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { SampleFormProps } from "./types";

const SampleForm = (props: SampleFormProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn>SampleForm</GridColumn>
         </Grid>
      </Page>
   );
};

export default SampleForm;
