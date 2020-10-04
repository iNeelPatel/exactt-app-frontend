// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { TestDetailsFormProps } from "./types";

const TestDetailsForm = (props: TestDetailsFormProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn>TestDetailsForm</GridColumn>
         </Grid>
      </Page>
   );
};

export default TestDetailsForm;
