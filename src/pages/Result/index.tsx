// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";
import SampleDetails from "./SampleDetails";

const SampleResult = (props: Props) => {
   // const { sampleResultPermission } = props;
   const { sampleId } = props.match.params;
   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/sample", name: "Sample" },
      { path: `/sample/id/${sampleId}`, name: sampleId },
      { path: `/sample/id/${sampleId}/result`, name: "Result" },
   ];
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Result" />
            </GridColumn>
            <GridColumn medium={12}>
               <SampleDetails sampleDetails={{}} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleResultPermission: state.user.user.role.permission.samples_id_result,
});

export default connect(mapStateToProps)(SampleResult);
