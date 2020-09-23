// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../../components";
import AddSampleDetailForm from "./AddSampleDetailForm";
import { Props } from "./types";

const AddSampleDetail = (props: Props) => {
   const { sampleDetailId } = props.match.params;

   const breadcrumbItems = [
      { path: "/", name: "Organization Settings" },
      { path: "/organizationsettings/sampledetail", name: "Sample Details" },
      { path: `/organizationsettings/sampledetail/${sampleDetailId ? `edit/${sampleDetailId}` : "add"}`, name: sampleDetailId ? "Edit" : "Add" },
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
               <Breadcrumb items={breadcrumbItems} screen={sampleDetailId ? "Edit Sample Detail" : "Add Sample Detail"} />
            </GridColumn>
            <GridColumn medium={7}>
               <AddSampleDetailForm onBack={onBack} onSubmit={onSubmit} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddSampleDetail);
