// ====================================== Module imports ======================================
import React, { Fragment, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import Select from "@atlaskit/select";

// ====================================== File imports ======================================
import { ReportDetailProps } from "./types";

const TestDetailsForm = (props: ReportDetailProps) => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}></GridColumn>
         </Grid>
      </Page>
   );
};

export default TestDetailsForm;
