// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { ProgressTracker, Stages } from "@atlaskit/progress-tracker";
import { colors, typography } from "@atlaskit/theme";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import moment from "moment";

// ====================================== File imports ======================================
import { Breadcrumb, Divider, Heading, ScreenLoader } from "../../../components";
import { Props } from "./types";
import SampleForm from "./SampleForm";
import BasicDetailsForm from "./BasicDetailsForm";
import TestDetailsForm from "./TestDetailsForm";
import AppState from "../../../redux/types";
import { searchCustomers } from "../../../redux/actions/CustomerActions";
import { searchTestGroups } from "../../../redux/actions/TestGroupsActions";
import { searchSamplesDetails } from "../../../redux/actions/SamplesDetailsActions";
import { searchSampleGroup } from "../../../redux/actions/SampleGroupsActions";
import { searchParameters } from "../../../redux/actions/ParameterActions";
import { createSample } from "../../../redux/actions/SamplesActions";
import { getUsers } from "../../../redux/actions/UserActions";
import { User } from "../../../redux/types/UserTypes";

const style = {
   mainCard: {
      background: colors.N30,
      borderRadius: 4,
      padding: 5,
      marginLeft: 10,
   },
   card: {
      margin: 5,
      background: colors.N0,
      padding: 5,
      borderRadius: 3,
   },
   heading: {
      marginTop: 1,
   },
   title: {
      fontWeight: "bold",
   },
   subHeading: {
      marginTop: 1,
      width: 80,
      minWidth: 80,
   },
};

const AddSampleGroup = (props: Props) => {
   const {
      searchCustomers,
      searchedCustomers,
      searchTestGroups,
      searchedTestGroups,
      searchSamplesDetails,
      searchedSamplesDetails,
      getUsers,
      users,
      searchSampleGroup,
      searchedSampleGroup,
      searchParameters,
      searchedParameters,
      createSample,
   } = props;
   const { sampleId } = props.match.params;

   const [step, setStep] = useState(0);
   const [loading, setLoading] = useState(true);
   const [basicDetails, setBasicDetails] = useState<any>({});
   const [sampleDetails, setSampleDetails] = useState<any>({});
   // const [testingDetails, setTestingDetails] = useState<any>({});
   const [userOptions, setUserOptions] = useState<any>([]);
   const [hodOptions, setHodOptions] = useState<any>([]);

   // console.log("basicDetails => ", basicDetails);
   // console.warn("sampleDetails => ", sampleDetails);
   // console.warn("testingDetails => ", testingDetails);

   const getUsersFun = async () => {
      await getUsers();
      setLoading(false);
   };

   useEffect(() => {
      if (users) {
         let hodUserOptions: any[] = [];
         let usersOptions: any[] = [];
         users?.map((user: User) => {
            if (user.role.name === "hod") {
               hodUserOptions.push({ label: user.name, value: user.objectId });
            } else {
               usersOptions.push({ label: user.name, value: user.objectId });
            }
         });
         setUserOptions(usersOptions);
         setHodOptions(hodUserOptions);
      }
   }, [users]);

   useEffect(() => {
      getUsersFun();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/sample", name: "Samples" },
      { path: `/sample/${sampleId ? `edit/${sampleId}` : "add"}`, name: sampleId ? "Edit" : "Add" },
   ];

   const onBack = () => {
      props.history.goBack();
   };

   const onSubmit = async (testingData: any) => {
      let formData: any = {};
      formData["name"] = sampleDetails.sampleName.label;
      formData["test_group"] = basicDetails.testGroup.value;
      formData["generic_name"] = sampleDetails.genericName;
      formData["customer"] = basicDetails.customer;
      formData["date"] = moment(basicDetails.date).toDate();
      formData["lab_due_date"] = moment(basicDetails.labDueDate).toDate();
      formData["due_date"] = moment(basicDetails.dueDate).toDate();
      formData["mfg_date"] = moment(sampleDetails.mfgDate, "YYYY-MM-DD").toDate();
      formData["exp_date"] = moment(sampleDetails.expDate, "YYYY-MM-DD").toDate();
      formData["collection_date"] = moment(sampleDetails.collectionDate, "YYYY-MM-DD").toDate();
      formData["sample_code"] = sampleDetails.sampleCode;
      formData["brand_name"] = sampleDetails.brandName;
      formData["manufacture"] = sampleDetails.manufacture;
      formData["marking"] = sampleDetails.marking;
      formData["supplier"] = sampleDetails.supplier;
      formData["batch_no"] = sampleDetails.batchNo;
      formData["batch_size"] = sampleDetails.batchSize;
      formData["drug_lic_no"] = sampleDetails.licNo;
      formData["type"] = sampleDetails.type;
      formData["description"] = sampleDetails.description;
      formData["sample_packing"] = sampleDetails.samplePacking;
      formData["sample_qty"] = sampleDetails.sampleQty;
      formData["sample_condition"] = sampleDetails.sampleCondition;
      formData["serving_size"] = sampleDetails.servingSize;
      formData["env_condition"] = sampleDetails.envCondition;
      formData["collection_by"] = sampleDetails.conllectedBy.value;
      formData["sampling_method"] = testingData.samplingMethod;
      formData["test_method_group"] = {
         name: testingData.testGroup.name,
         objectId: testingData.testGroup.objectId,
      };
      formData["instruction"] = testingData.instruction;
      formData["hod"] = testingData.hod.value;
      formData["parameters"] = testingData.parameters;

      console.log(formData);
      try {
         await createSample(formData);
         onBack();
      } catch (error) {
         console.log(error);
      }
   };

   const items: Stages = [
      {
         id: "0",
         label: "Basic Details",
         percentageComplete: 0,
         status: "current",
         noLink: false,
         onClick: () => setStep(0),
      },
      {
         id: "1",
         label: "Sample Details",
         percentageComplete: 0,
         status: "unvisited",
         noLink: false,
         onClick: () => setStep(1),
      },
      {
         id: "2",
         label: "Testing Details",
         percentageComplete: 0,
         status: "unvisited",
         noLink: false,
         onClick: () => setStep(2),
      },
   ];

   const stepItems: Stages = items.map((item) => {
      if (parseInt(item.id) === step) {
         return {
            ...item,
            percentageComplete: 0,
            status: "current",
         };
      } else if (step < 4 && parseInt(item.id) < step) {
         return {
            ...item,
            percentageComplete: 100,
            status: "visited",
         };
      } else {
         return item;
      }
   });

   return loading ? (
      <ScreenLoader />
   ) : (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={sampleId ? "Edit Sample" : "Add Sample"} marginBottom={1} />
            </GridColumn>
            <GridColumn medium={12}>
               <Grid>
                  <GridColumn medium={2} />
                  <GridColumn medium={8}>
                     <ProgressTracker items={stepItems} animated={true} spacing="cosy" />
                  </GridColumn>
                  <GridColumn medium={2} />
               </Grid>
            </GridColumn>

            <Divider />

            <GridColumn medium={8}>
               <div style={{ display: step === 0 ? "block" : "none" }}>
                  <BasicDetailsForm
                     onBack={onBack}
                     onSearchCustomers={searchCustomers}
                     searchedCustomers={searchedCustomers}
                     onSearchTestGroups={searchTestGroups}
                     searchedTestGroups={searchedTestGroups}
                     onSubmit={(data) => {
                        setBasicDetails(data);
                        setStep(step + 1);
                     }}
                  />
               </div>
               <div style={{ display: step === 1 ? "block" : "none" }}>
                  <SampleForm
                     searchedSamplesDetails={searchedSamplesDetails}
                     onSearchSamplesDetails={searchSamplesDetails}
                     userOptions={userOptions}
                     onBack={() => setStep(0)}
                     onSubmit={(data) => {
                        setSampleDetails(data);
                        setStep(step + 1);
                     }}
                  />
               </div>
               <div style={{ display: step === 2 ? "block" : "none" }}>
                  <TestDetailsForm
                     onSearchSampleGroup={searchSampleGroup}
                     searchedSampleGroup={searchedSampleGroup}
                     searchedParameters={searchedParameters}
                     onSearchParameters={searchParameters}
                     isNewSample={sampleDetails?.sampleName?.__isNew__ ? true : false}
                     sampleDetails={sampleDetails?.sampleName}
                     hodOptions={hodOptions}
                     onBack={() => setStep(1)}
                     onSubmit={(data) => onSubmit(data)}
                  />
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={{ marginTop: 30 }}>
                  <div style={style.mainCard}>
                     {basicDetails.customer ? (
                        <div style={style.card}>
                           <div>
                              <Heading mixin={typography.h200} style={style.heading}>
                                 Customer
                              </Heading>
                              <Heading mixin={typography.h500} style={style.heading}>
                                 {basicDetails.customer.name}
                              </Heading>
                           </div>
                           <Divider />
                           <div style={{ display: "flex" }}>
                              <Heading mixin={typography.h400} style={style.subHeading}>
                                 Phone
                              </Heading>
                              <span style={{ color: colors.N300 }}>{basicDetails.customer.contact.phone}</span>
                           </div>
                           <div style={{ display: "flex" }}>
                              <Heading mixin={typography.h400} style={style.subHeading}>
                                 Email
                              </Heading>
                              <span style={{ color: colors.N300 }}>{basicDetails.customer.contact.email}</span>
                           </div>
                           <div style={{ display: "flex" }}>
                              <Heading mixin={typography.h400} style={style.subHeading}>
                                 Address
                              </Heading>
                              <span
                                 style={{ color: colors.N300 }}
                              >{`${basicDetails.customer.address.line1}, ${basicDetails.customer.address.line2}, ${basicDetails.customer.address.city}, ${basicDetails.customer.address.state}-${basicDetails.customer.address.zip}`}</span>
                           </div>
                        </div>
                     ) : (
                        <div style={{ display: "flex", justifyContent: "center" }}>Customer is not selected</div>
                     )}
                  </div>
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   samples: state.samples.samples,
   searchedCustomers: state.customer.searchedCustomers,
   searchedTestGroups: state.testGroup.searchedTestGroups,
   searchedSamplesDetails: state.samplesDetails.searchedSamplesDetails,
   searchedSampleGroup: state.sampleGroup.searchSampleGroup,
   searchedParameters: state.parameter.searchedParameters,
   users: state.user.users,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators(
         { searchCustomers, searchTestGroups, searchSamplesDetails, getUsers, searchSampleGroup, searchParameters, createSample },
         dispatch
      ),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSampleGroup);
