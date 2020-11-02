// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../../components";
import AddTestMethodForm from "./AddTestMethodForm";
import { Props } from "./types";
import { searchParameters } from "../../../redux/actions/ParameterActions";
import { createSampleGroup } from "../../../redux/actions/SampleGroupsActions";

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

   const onSearchParameter = async (keyword: string) => {
      await props.searchParameters(keyword);
   };

   const onSubmit = async (data: any) => {
      await props.createSampleGroup(data);
   };

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={testMethodId ? "Edit Test Method" : "Add Test Method"} />
            </GridColumn>
            <GridColumn medium={8}>
               <AddTestMethodForm
                  onBack={onBack}
                  onSubmit={onSubmit}
                  onSearchParameter={onSearchParameter}
                  searchedParameters={props.searchedParameters}
               />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
   searchedParameters: state.parameter.searchedParameters,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ searchParameters, createSampleGroup }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSampleGroup);
