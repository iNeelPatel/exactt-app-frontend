// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb, ScreenLoader } from "../../../components";
import AddSampleDetailForm from "./AddSampleDetailForm";
import { Props } from "./types";
import { searchSampleGroup } from "../../../redux/actions/SampleGroupsActions";
import { createSampleDetails, getSampleDetails, updateSampleDetails } from "../../../redux/actions/SamplesDetailsActions";

const AddSampleDetail = (props: Props) => {
   const { searchSampleGroup, searchedSampleGroup, createSampleDetails, getSampleDetails, sampleDetails, updateSampleDetails } = props;
   const { sampleDetailId } = props.match.params;
   const [loading, setLoading] = useState(true);

   const breadcrumbItems = [
      { path: "/", name: "Organization Settings" },
      { path: "/organizationsettings/sampledetail", name: "Sample Details" },
      {
         path: `/organizationsettings/sampledetail/${sampleDetailId ? `edit/${sampleDetailId}` : "add"}`,
         name: sampleDetailId ? "Edit" : "Add",
      },
   ];

   const onBack = () => {
      props.history.goBack();
   };

   const onSubmit = async (data: any) => {
      if (sampleDetailId) {
         await updateSampleDetails({ ...data, objectId: sampleDetailId });
      } else {
         await createSampleDetails(data);
      }
   };

   const onSearchSampleGorup = async (kayword: string) => {
      await searchSampleGroup(kayword);
   };

   const focus = async () => {
      if (sampleDetailId) {
         await getSampleDetails(sampleDetailId);
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
               <Breadcrumb items={breadcrumbItems} screen={sampleDetailId ? "Edit Sample Detail" : "Add Sample Detail"} />
            </GridColumn>
            <GridColumn medium={8}>
               {loading ? (
                  <ScreenLoader />
               ) : (
                  <AddSampleDetailForm
                     onBack={onBack}
                     onSubmit={onSubmit}
                     onSearchSampleGorup={onSearchSampleGorup}
                     searchedSampleGroup={searchedSampleGroup}
                     edit={sampleDetailId ? true : false}
                     editData={sampleDetails}
                  />
               )}
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
   searchedSampleGroup: state.sampleGroup.searchSampleGroup,
   sampleDetails: state.samplesDetails.sampleDetails,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ searchSampleGroup, createSampleDetails, getSampleDetails, updateSampleDetails }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSampleDetail);
