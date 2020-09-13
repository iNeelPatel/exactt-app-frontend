// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Props } from "./types";
import { Breadcrumb } from "../../../components";
import AddCustomerForm from "./AddCustomerForm";
import AppState from "../../../redux/types";
import { Customer } from "../../../redux/types/CustomerTypes";
import { createCustomers } from "../../../redux/actions/CustomerActions";

const AddCustomer = (props: Props) => {
   const { customerId } = props.match.params;
   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/customer", name: "Customers" },
      { path: `/customer/${customerId ? `edit/${customerId}` : "add"}`, name: customerId ? "Edit customer" : "Add customer" },
   ];

   const handleSubmit = async (customer: Customer) => {
      await props.createCustomers(customer);
   };

   const onBack = () => {
      props.history.goBack();
   };

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={customerId ? "Edit customer" : "Add customer"} />
            </GridColumn>
            <GridColumn medium={7}>
               <AddCustomerForm onSubmit={handleSubmit} onBack={onBack} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   customers: state.customer.customer,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ createCustomers }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
