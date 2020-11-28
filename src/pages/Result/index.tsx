// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";
import ReportDetails from "./ReportDetail";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";
import SampleDetails from "./SampleDetails";

const SampleResult = (props: Props) => {
   const { sampleId } = props.match.params;
   const { sample } = props;
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
               <SampleDetails sampleDetails={sample} />
               <ReportDetails
                  parameters={sample?.sampleResultParameters.map((parameter) => ({
                     ...parameter,
                     assign_to: parameter.assign_to && {
                        ...parameter.assign_to.toJSON(),
                        label: parameter.assign_to.toJSON().name,
                        value: parameter.assign_to.toJSON().objectId,
                     },
                  }))}
                  onSubmit={() => {}}
               />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleResultPermission: state.user.user.role.permission.samples_id_result,
   sample: state.samples.sample,
});

export default connect(mapStateToProps)(SampleResult);
