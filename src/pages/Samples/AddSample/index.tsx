// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../../components";
import AddSampleForm from "./AddSampleForm";
import { Props } from "./types";

const AddSampleGroup = (props: Props) => {
   const { sampleId } = props.match.params;

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

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={sampleId ? "Edit Sample" : "Add Sample"} />
            </GridColumn>
            <GridColumn medium={7}>
               <AddSampleForm onBack={onBack} onSubmit={onSubmit} />
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default AddSampleGroup;
