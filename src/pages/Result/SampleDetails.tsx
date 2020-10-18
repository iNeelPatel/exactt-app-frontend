// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { colors } from "@atlaskit/theme";
import { typography } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Heading, Divider } from "../../components";
import { SampleDetailsProps } from "./types";

const styles = {
   item: {
      display: "flex",
      marginTop: 3,
   },
   label: {
      width: 88,
      alignItems: "flex-start",
   },
   text: {
      display: "flex",
      flex: 1,
      color: colors.N300,
      paddingRight: 10,
   },
};

const SampleDetails = (props: SampleDetailsProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Heading mixin={typography.h300} style={{ marginTop: 1 }}>
                  Sample name
               </Heading>
               <Heading mixin={typography.h200} style={{ marginTop: 1 }}>
                  HTL-KSZ-201008043
               </Heading>
            </GridColumn>
         </Grid>
         <Divider />
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Method</div>
                  <div style={styles.text}>ISO 15203 - 2003</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Batch no</div>
                  <div style={styles.text}>HNKS9123MS</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Sample date</div>
                  <div style={styles.text}>17/10/2020</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Marking</div>
                  <div style={styles.text}>N/A</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Due date</div>
                  <div style={styles.text}>17/10/2020</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample Qty</div>
                  <div style={styles.text}>4 Nos.</div>
               </div>
            </GridColumn>
         </Grid>
         <Divider />
      </Page>
   );
};

export default SampleDetails;
