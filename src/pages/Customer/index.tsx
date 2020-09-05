// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";

const breadcrumbItems = [
   { path: "/", name: "Dashboard" },
   { path: "/customer", name: "Customer" },
];
const Customer = () => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Customer" />
            </GridColumn>
            <GridColumn medium={12}>Customer</GridColumn>
         </Grid>
      </Page>
   );
};

export default Customer;
