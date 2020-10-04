// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { AddSampleFormProps } from "./types";

const AddSampleGroup = (props: AddSampleFormProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn>Add sample group from</GridColumn>
         </Grid>
      </Page>
   );
};

export default AddSampleGroup;
