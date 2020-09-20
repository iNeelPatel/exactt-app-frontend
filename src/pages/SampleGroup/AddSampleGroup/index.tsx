// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../../components";
import AddSampleGroupForm from "./AddSampleGroupForm";
import { Props } from "./types";

const AddSampleGroup = (props: Props) => {
   const { groupId } = props.match.params;

   const breadcrumbItems = [
      { path: "/", name: "Organization Settings" },
      { path: "/organizationsettings/samplegroup", name: "Sample Group" },
      { path: `/organizationsettings/samplegroup/${groupId ? `edit/${groupId}` : "add"}`, name: groupId ? "Edit" : "Add" },
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
               <Breadcrumb items={breadcrumbItems} screen={ groupId ? "Edit Sample Group" : "Add Sample Group"} />
            </GridColumn>
            <GridColumn medium={7}>
               <AddSampleGroupForm onBack={onBack} onSubmit={onSubmit} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddSampleGroup);
