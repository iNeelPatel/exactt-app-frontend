// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { colors } from "@atlaskit/theme";
import { typography } from "@atlaskit/theme";
import moment from "moment";

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
   const { sampleDetails } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Heading mixin={typography.h300} style={{ marginTop: 1 }}>
                  {sampleDetails?.name}
               </Heading>
               <Heading mixin={typography.h200} style={{ marginTop: 1 }}>
                  {sampleDetails?.sampleId}
               </Heading>
            </GridColumn>
         </Grid>
         <Divider />
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Method</div>
                  <div style={styles.text}>{sampleDetails?.test_method_group.name}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Batch no</div>
                  <div style={styles.text}>{sampleDetails?.batch_no}</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Sample date</div>
                  <div style={styles.text}>{moment(sampleDetails?.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Marking</div>
                  <div style={styles.text}>{sampleDetails?.marking}</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Due date</div>
                  <div style={styles.text}>{moment(sampleDetails?.due_date).format("DD/MM/YYYY")}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample Qty</div>
                  <div style={styles.text}>{sampleDetails?.sample_qty}</div>
               </div>
            </GridColumn>
         </Grid>
         <Divider />
      </Page>
   );
};

export default SampleDetails;
