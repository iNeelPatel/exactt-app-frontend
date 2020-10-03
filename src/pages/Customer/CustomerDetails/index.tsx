// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb, Divider } from "../../../components";
import { Props } from "./types";
import AppState from "../../../redux/types";
import { Customer } from "../../../redux/types/CustomerTypes";
import Details from "./Details";

const CustomerDetails = (props: Props) => {
   const customer: Customer = props.customer;
   const { customerId } = props.match.params;
   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/customer", name: "Customers" },
      { path: `/customer/${customerId ? `details/${customerId}` : "add"}`, name: customer.name },
   ];
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Customer Details" />
            </GridColumn>
            <GridColumn medium={7}>
               <Details customer={customer} />
               <Divider />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   customerPermission: state.user.user.role.permission.customer,
   customer: state.customer.customer,
});

export default connect(mapStateToProps)(CustomerDetails);
