// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../../components";
import AddTestMethodForm from "./AddTestMethodForm";
import { Props } from "./types";

const AddSampleGroup = (props: Props) => {
   const { testMethodId } = props.match.params;

   const breadcrumbItems = [
      { path: "/", name: "Organization Settings" },
      { path: "/organizationsettings/testmethod", name: "Test Method" },
      { path: `/organizationsettings/testmethod/${testMethodId ? `edit/${testMethodId}` : "add"}`, name: testMethodId ? "Edit" : "Add" },
   ];

   const onBack = () => {
      props.history.goBack();
   };

   const onSubmit = (data: any) => {
      console.log(data);
   };

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={testMethodId ? "Edit Test Method" : "Add Test Method"} />
            </GridColumn>
            <GridColumn medium={8}>
               <AddTestMethodForm onBack={onBack} onSubmit={onSubmit} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddSampleGroup);
