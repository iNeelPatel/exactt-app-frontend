// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { SampleDetailsProps } from "./types";

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

const SampleDetails = (props: SampleDetailsProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Test group</div>
                  <div style={styles.text}>KSZ</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Collection date</div>
                  <div style={styles.text}>17/10/2020</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample code</div>
                  <div style={styles.text}>8HG573</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Marking</div>
                  <div style={styles.text}>832ISN221</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Batch size</div>
                  <div style={styles.text}>12 Nos</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample packing</div>
                  <div style={styles.text}>Box</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Serving size</div>
                  <div style={styles.text}>Box</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Due date</div>
                  <div style={styles.text}>17/10/2020</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Mfg. date</div>
                  <div style={styles.text}>17/10/2020</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Brand name</div>
                  <div style={styles.text}>Xyz company</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Supplier/Importer</div>
                  <div style={styles.text}>Xyz company</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Drug lic. no.</div>
                  <div style={styles.text}>723SB32</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample quantity</div>
                  <div style={styles.text}>2 Nos</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Env condition</div>
                  <div style={styles.text}>Cold</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Lab due date</div>
                  <div style={styles.text}>17/10/2020</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Exp. date</div>
                  <div style={styles.text}>17/10/2020</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Manufacture</div>
                  <div style={styles.text}>Xyz comapny</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Batch / Lot No</div>
                  <div style={styles.text}>Xyz comapny</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Type</div>
                  <div style={styles.text}>Liquid</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample condition</div>
                  <div style={styles.text}>Good</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Collected by</div>
                  <div style={styles.text}>Neel Patel</div>
               </div>
            </GridColumn>
            <GridColumn medium={12}>
               <div style={styles.item}>
                  <div style={styles.label}>Description</div>
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

export default SampleDetails;
