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
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <div style={styles.item}>
                  <div style={styles.label}>Sampling method</div>
                  <div style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Test group</div>
                  <div style={styles.text}>Lorem ipsum, or lipsum as it is sometimes known</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Parameters</div>
                  <div style={styles.text}>pH, color, etc.</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Instrustuons</div>
                  <div style={styles.text}>
                     Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The
                     passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's
                     De Finibus Bonorum et Malorum for use in a type specimen book.
                  </div>
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default TestDetails;
