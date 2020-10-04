// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { BasicDetailsFormProps } from "./types";

const BasicDetailsForm = (props: BasicDetailsFormProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn>BasicDetailsForm</GridColumn>
         </Grid>
      </Page>
   );
};

export default BasicDetailsForm;
