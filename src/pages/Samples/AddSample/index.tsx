// ====================================== Module imports ======================================
import React, { useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { ProgressTracker, Stages } from "@atlaskit/progress-tracker";
import { colors, typography } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Breadcrumb, Divider, Heading } from "../../../components";
import { Props } from "./types";
import SampleForm from "./SampleForm";
import BasicDetailsForm from "./BasicDetailsForm";
import TestDetailsForm from "./TestDetailsForm";

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
   const { sampleId } = props.match.params;

   const [step, setStep] = useState(0);
   const [basicDetails, setBasicDetails] = useState({});
   const [sampleDetails, setSampleDetails] = useState({});
   const [testingDetails, setTestingDetails] = useState({});

   console.log("basicDetails => ", basicDetails);
   console.log("sampleDetails => ", sampleDetails);
   console.log("testingDetails => ", testingDetails);

   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/sample", name: "Samples" },
      { path: `/sample/${sampleId ? `edit/${sampleId}` : "add"}`, name: sampleId ? "Edit" : "Add" },
   ];

   const onBack = () => {
      props.history.goBack();
   };

   const onSubmit = (data: any) => {
      console.log(data);
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

   console.log(step);

   return (
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
                     onSubmit={(data) => {
                        setBasicDetails(data);
                        setStep(step + 1);
                     }}
                  />
               </div>
               <div style={{ display: step === 1 ? "block" : "none" }}>
                  <SampleForm
                     onBack={() => setStep(0)}
                     onSubmit={(data) => {
                        setSampleDetails(data);
                        setStep(step + 1);
                     }}
                  />
               </div>
               <div style={{ display: step === 2 ? "block" : "none" }}>
                  <TestDetailsForm
                     onBack={() => setStep(1)}
                     onSubmit={(data) => {
                        setTestingDetails(data);
                     }}
                  />
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={{ marginTop: 30 }}>
                  <div style={style.mainCard}>
                     <div style={style.card}>
                        <div>
                           <Heading mixin={typography.h200} style={style.heading}>
                              Customer
                           </Heading>
                           <Heading mixin={typography.h500} style={style.heading}>
                              SenseLab Inc.
                           </Heading>
                        </div>
                        <Divider />
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Phone
                           </Heading>
                           <span style={{ color: colors.N300 }}> +91 9876387463</span>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Email
                           </Heading>
                           <span style={{ color: colors.N300 }}> neelpatel@senselab.io</span>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Address
                           </Heading>
                           <span style={{ color: colors.N300 }}>E/1 Vasudev Bunglows, B/H Annpurna Hotel, Jashodanagar, Ahmedabad</span>
                        </div>
                     </div>
                     <div style={style.card}>
                        <div>
                           <Heading mixin={typography.h200} style={style.heading}>
                              Sample details
                           </Heading>
                           <Heading mixin={typography.h400} style={style.heading}>
                              Sample Name
                           </Heading>
                           <Heading mixin={typography.h200} style={style.heading}>
                              Genric name
                           </Heading>
                        </div>
                        <Divider />
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Due date
                           </Heading>
                           <span style={{ color: colors.N300 }}>09/10/2020</span>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Brand
                           </Heading>
                           <span style={{ color: colors.N300 }}>xyz company</span>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Mfg. by
                           </Heading>
                           <span style={{ color: colors.N300 }}>xyz company</span>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Mfg. date
                           </Heading>
                           <span style={{ color: colors.N300 }}>23/1/2019</span>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Exp. date
                           </Heading>
                           <span style={{ color: colors.N300 }}>23/1/2021</span>
                        </div>
                        <div style={{ display: "flex" }}>
                           <Heading mixin={typography.h400} style={style.subHeading}>
                              Batch/Lot
                           </Heading>
                           <span style={{ color: colors.N300 }}>212-3A-21032</span>
                        </div>
                     </div>
                     <div style={style.card}>
                        <div>
                           <Heading mixin={typography.h200} style={style.heading}>
                              Testing Details
                           </Heading>
                           <Heading mixin={typography.h400} style={style.heading}>
                              Group name
                           </Heading>
                           <Heading mixin={typography.h200} style={style.heading}>
                              pH, color, etc.
                           </Heading>
                        </div>
                     </div>
                  </div>
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default AddSampleGroup;
