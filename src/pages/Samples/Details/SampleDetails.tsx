// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { colors } from "@atlaskit/theme";
import moment from "moment";

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
   const { sampleDetails } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Test group</div>
                  <div style={styles.text}>
                     {sampleDetails?.test_group.name} ({sampleDetails?.test_group.code})
                  </div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Collection date</div>
                  <div style={styles.text}>{moment(sampleDetails?.collection_date).format("DD/MM/YYYY")}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample code</div>
                  <div style={styles.text}>{sampleDetails?.sample_code}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Marking</div>
                  <div style={styles.text}>{sampleDetails?.marking}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Batch size</div>
                  <div style={styles.text}>{sampleDetails?.batch_size}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample packing</div>
                  <div style={styles.text}>{sampleDetails?.sample_packing}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Serving size</div>
                  <div style={styles.text}>{sampleDetails?.serving_size}</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Due date</div>
                  <div style={styles.text}>{moment(sampleDetails?.due_date).format("DD/MM/YYYY")}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Mfg. date</div>
                  <div style={styles.text}>{moment(sampleDetails?.mfg_date).format("DD/MM/YYYY")}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Brand name</div>
                  <div style={styles.text}>{sampleDetails?.brand_name}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Supplier/Importer</div>
                  <div style={styles.text}>{sampleDetails?.supplier}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Drug lic. no.</div>
                  <div style={styles.text}>{sampleDetails?.drug_lic_no}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample quantity</div>
                  <div style={styles.text}>{sampleDetails?.sample_qty}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Env condition</div>
                  <div style={styles.text}>{sampleDetails?.env_condition}</div>
               </div>
            </GridColumn>

            <GridColumn medium={4}>
               <div style={styles.item}>
                  <div style={styles.label}>Lab due date</div>
                  <div style={styles.text}>{moment(sampleDetails?.lab_due_date).format("DD/MM/YYYY")}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Exp. date</div>
                  <div style={styles.text}>{moment(sampleDetails?.exp_date).format("DD/MM/YYYY")}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Manufacture</div>
                  <div style={styles.text}>{sampleDetails?.manufacture}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Batch / Lot No</div>
                  <div style={styles.text}>{sampleDetails?.batch_no}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Type</div>
                  <div style={styles.text}>{sampleDetails?.type}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Sample condition</div>
                  <div style={styles.text}>{sampleDetails?.sample_condition}</div>
               </div>
               <div style={styles.item}>
                  <div style={styles.label}>Collected by</div>
                  <div style={styles.text}>{sampleDetails?.collection_by.name}</div>
               </div>
            </GridColumn>
            {sampleDetails?.description ? (
               <GridColumn medium={12}>
                  <div style={styles.item}>
                     <div style={styles.label}>Description</div>
                     <div style={styles.text}>{sampleDetails?.description}</div>
                  </div>
               </GridColumn>
            ) : null}
         </Grid>
      </Page>
   );
};

export default SampleDetails;
