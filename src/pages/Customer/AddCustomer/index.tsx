// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { Props } from "./types";
import { Breadcrumb } from "../../../components";

const AddCustomer = (props: Props) => {
   const { customerId } = props.match.params;
   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/customer", name: "Customers" },
      { path: `/customer/${customerId ? `edit/${customerId}` : "add"}`, name: customerId ? "Edit customer" : "Add customer" },
   ];
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={customerId ? "Edit customer" : "Add customer"} />
            </GridColumn>
            <GridColumn medium={12}>Add customer</GridColumn>
         </Grid>
      </Page>
   );
};

export default AddCustomer;
