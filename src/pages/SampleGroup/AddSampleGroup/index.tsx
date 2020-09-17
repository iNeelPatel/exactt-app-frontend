// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../../components";
import AddSampleGroupForm from "./AddSampleGroupForm";
import { Props } from "./types";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/testgroup", name: "Test Group" },
   { path: "/organizationsettings/testgroup/add", name: "Add" },
];

const AddTestGroup = (props: Props) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Add Sample Group" />
            </GridColumn>
            <GridColumn medium={7}>
               <AddSampleGroupForm />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddTestGroup);
