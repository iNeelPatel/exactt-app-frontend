// ====================================== Module imports ======================================
import React, { useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { ProgressTracker, Stages } from "@atlaskit/progress-tracker";
// import Button from "@atlaskit/button";
import { colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Breadcrumb, Divider, Box } from "../../../components";
import { Props } from "./types";
import SampleForm from "./SampleForm";
import BasicDetailsForm from "./BasicDetailsForm";
import TestDetailsForm from "./TestDetailsForm";
import Preview from "./Preview";

const style = {
   mainCard: {
      background: colors.N30,
      borderRadius: 4,
      padding: 5,
      marginLeft: 10,
   },
   card: { margin: 5, background: colors.N0, padding: 5, borderRadius: 3 },
};

const AddSampleGroup = (props: Props) => {
   const { sampleId } = props.match.params;
   const [step, setStep] = useState(1);
   const [basicDetails, setBasicDetails] = useState({});

   console.log("basicDetails => ", basicDetails);

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
      {
         id: "3",
         label: "Preview",
         percentageComplete: 0,
         status: "unvisited",
         noLink: false,
         onClick: () => setStep(3),
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
               {/* <Button appearance="default" onClick={() => setStep(step + 1)}>
                  Next
               </Button> */}
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
                  <SampleForm onBack={onBack} onSubmit={onSubmit} />
               </div>
               <div style={{ display: step === 2 ? "block" : "none" }}>
                  <TestDetailsForm onBack={onBack} onSubmit={onSubmit} />
               </div>
               <div style={{ display: step === 3 ? "block" : "none" }}>
                  <Preview onBack={onBack} onSubmit={onSubmit} />
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={{ marginTop: 30 }}>
                  <div style={style.mainCard}>
                     <div style={style.card}>
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                        <div>a</div>
                     </div>
                  </div>
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default AddSampleGroup;
