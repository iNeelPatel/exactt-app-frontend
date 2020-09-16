// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Props } from "./types";
import { Breadcrumb, ScreenLoader } from "../../../components";
import AddCustomerForm from "./AddCustomerForm";
import AppState from "../../../redux/types";
import { Customer } from "../../../redux/types/CustomerTypes";
import { createCustomers, getCustomer, updateCustomers } from "../../../redux/actions/CustomerActions";

const AddCustomer = (props: Props) => {
   const { customerId } = props.match.params;
   const { customer } = props;
   const [loading, setLoading] = useState(true);
   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/customer", name: "Customers" },
      { path: `/customer/${customerId ? `edit/${customerId}` : "add"}`, name: customerId ? "Edit customer" : "Add customer" },
   ];

   const focus = async () => {
      if (customerId) {
         await props.getCustomer(customerId);
      }
      setLoading(false);
   };

   console.log(props.customer);

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleSubmit = async (customer: Customer) => {
      if (customerId) {
         await props.updateCustomers({...customer, objectId: customerId});
      } else {
         await props.createCustomers(customer);
      }
   };

   const onBack = () => {
      props.history.goBack();
   };

   return loading ? (
      <ScreenLoader />
   ) : (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={customerId ? "Edit customer" : "Add customer"} />
            </GridColumn>
            <GridColumn medium={7}>
               <AddCustomerForm onSubmit={handleSubmit} onBack={onBack} customer={customer} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   customer: state.customer.customer,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ createCustomers, getCustomer, updateCustomers }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCustomer);
