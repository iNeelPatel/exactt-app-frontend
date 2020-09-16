// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";

const breadcrumbItems = [
    { path: "/", name: "Organization Settings" },
    { path: "/organizationsettings/testgroup", name: "Test Group" },
 ];

const TestGroup = () => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Test Group" />
            </GridColumn>
            <GridColumn medium={12}>Test Group</GridColumn>
         </Grid>
      </Page>
   );
};

export default TestGroup;
