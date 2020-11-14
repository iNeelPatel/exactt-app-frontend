// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { TestDetailsProps } from "./types";

const styles = {
   item: {
      display: "flex",
      marginTop: 3,
   },
   label: {
      width: 120,
      alignItems: "flex-start",
   },
   text: {
      display: "flex",
      flex: 1,
      color: colors.N300,
      paddingRight: 10,
   },
};

const TestDetails = (props: TestDetailsProps) => {
   const { sampleDetails } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <div style={styles.item}>
                  <div style={styles.label}>Sampling method</div>
                  <div style={styles.text}>{sampleDetails?.sampling_method}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Test method</div>
                  <div style={styles.text}>{sampleDetails?.test_method_group.name}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Parameters</div>
                  <div style={styles.text}>
                     {sampleDetails?.sampleResultParameters.map((sampleResultParameter, idx) => (
                        <span>
                           {sampleResultParameter.name} {sampleDetails?.sampleResultParameters.length - 1 !== idx && ","}
                        </span>
                     ))}
                  </div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Instrustuons</div>
                  <div style={styles.text}>{sampleDetails?.instruction}</div>
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default TestDetails;
