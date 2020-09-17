// ====================================== Module imports ======================================
import React from "react";
import { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { AddSampleGroupForm } from "./types";

const AddTestGroup = (props: AddSampleGroupForm) => {
   return (
      <Grid spacing="compact" layout="fluid">
         <GridColumn medium={12}>AddSampleGroupForm</GridColumn>
      </Grid>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddTestGroup);
