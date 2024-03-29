// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";
import ReportDetails from "./ReportDetail";

// ====================================== File imports ======================================
import { Breadcrumb, ScreenLoader } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";
import SampleDetails from "./SampleDetails";
import { getUsers } from "../../redux/actions/UserActions";
import { addResults } from "../../redux/actions/SamplesActions";
import { bindActionCreators } from "redux";
import { User } from "../../redux/types/UserTypes";

const SampleResult = (props: Props) => {
   const { sampleId } = props.match.params;
   const { sample, getUsers, users, addResults } = props;

   const [loading, setLoading] = useState(true);
   const [hodOptions, setHodOptions] = useState<any>([]);

   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/sample", name: "Sample" },
      { path: `/sample/id/${sampleId}`, name: sampleId },
      { path: `/sample/id/${sampleId}/result`, name: "Result" },
   ];

   const focus = async () => {
      await getUsers();
      setLoading(false);
   };

   const handleAddResults = async (data: any) => {
      await addResults(data);
      props.history.goBack();
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (users) {
         let hodUserOptions: any[] = [];
         users?.map((user: User) => {
            if (user.role.name === "hod") {
               hodUserOptions.push({ label: user.name, value: user.objectId });
            }
         });
         setHodOptions(hodUserOptions);
      }
   }, [users]);

   return loading ? (
      <ScreenLoader />
   ) : (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Result" />
            </GridColumn>
            <GridColumn medium={12}>
               <SampleDetails sampleDetails={sample} sampleId={sampleId} />
               <ReportDetails
                  parameters={sample?.sampleResultParameters.map((parameter) => ({
                     ...parameter,
                     assign_to: parameter.assign_to && {
                        ...parameter.assign_to.toJSON(),
                        label: parameter.assign_to.toJSON().name,
                        value: parameter.assign_to.toJSON().objectId,
                     },
                     parameter: parameter.parameter.toJSON(),
                  }))}
                  hodOptions={hodOptions}
                  onSubmit={async (data) => await handleAddResults({ ...data, resultsId: sample?.results.id })}
               />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleResultPermission: state.user.user.role.permission.samples_id_result,
   sample: state.samples.sample,
   users: state.user.users,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getUsers, addResults }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleResult);
