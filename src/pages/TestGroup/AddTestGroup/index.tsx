// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb, ScreenLoader } from "../../../components";
import AddTestGroupForm from "./AddTestGroupForm";
import { Props } from "./types";
import { createTestGroup, getTestGroup, updateTestGroup } from "../../../redux/actions/TestGroupsActions";
import { TestGroup } from "../../../redux/types/TestGroupsTypes";

const AddTestGroup = (props: Props) => {
   const { groupId } = props.match.params;
   const [loading, setLoading] = useState(true);

   const breadcrumbItems = [
      { path: "/", name: "Organization Settings" },
      { path: "/organizationsettings/testgroup", name: "Test Group" },
      { path: `/organizationsettings/testgroup/${groupId ? `edit/${groupId}` : "add"}`, name: groupId ? "Edit" : "Add" },
   ];

   const onBack = () => {
      props.history.goBack();
   };

   const onSubmit = async (data: TestGroup) => {
      try {
         if (groupId && props.testGroup) {
            await props.updateTestGroup({ ...data, objectId: props.testGroup.objectId });
         } else {
            await props.createTestGroup(data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const focus = async () => {
      if (groupId) {
         await props.getTestGroup(groupId);
      }
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={groupId ? "Edit Test Group" : "Add Test Group"} />
            </GridColumn>
            <GridColumn medium={8}>
               {loading ? (
                  <ScreenLoader />
               ) : (
                  <AddTestGroupForm onBack={onBack} onSubmit={onSubmit} edit={groupId ? true : false} editData={props.testGroup} />
               )}
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
   testGroup: state.testGroup.testGroup,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ createTestGroup, getTestGroup, updateTestGroup }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTestGroup);
