// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/user", name: "User" },
];

const User = () => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="User" />
            </GridColumn>
            <GridColumn medium={12}>Dashboard</GridColumn>
         </Grid>
      </Page>
   );
};

export default User;
