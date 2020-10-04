// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { typography, colors } from "@atlaskit/theme";
import Lozenge from "@atlaskit/lozenge";

// ====================================== File imports ======================================
import { RecordsProps } from "./types";
import { Heading } from "../../../components";

const styles = {
   mainCard: {
      background: colors.N30,
      borderRadius: 4,
      padding: 10,
   },
   card: {
      background: colors.N0,
      marginTop: 10,
      borderRadius: 3,
      padding: 5,
      display: "flex",
      justifyContent: "space-between",
   },
   text: {
      fontSize: 13,
      color: colors.N600,
   },
};

const Details = (props: RecordsProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <div style={styles.mainCard}>
                  <Heading mixin={typography.h300} style={{ marginTop: 0 }}>
                     SAMPLE RECORDS
                  </Heading>
                  {props.records.length > 0 ? (
                     props.records.map((item: any) => (
                        <div style={styles.card}>
                           <div style={{ textAlign: "left", maxWidth: "70%" }}>
                              <Heading mixin={typography.h300} style={{ marginTop: 0, fontSize: 14 }}>
                                 {item.reportId}
                              </Heading>
                              <div style={styles.text}>{item.name}</div>
                              <div style={styles.text}>Test method : {item.testMethod}</div>
                           </div>
                           <div style={{ textAlign: "right" }}>
                              <Lozenge
                                 appearance={
                                    item.status === "complete"
                                       ? "success"
                                       : item.status === "panding"
                                       ? "moved"
                                       : item.status === "canceled"
                                       ? "removed"
                                       : "inprogress"
                                 }
                              >
                                 {item.status}
                              </Lozenge>
                           </div>
                        </div>
                     ))
                  ) : (
                     <div style={{ textAlign: "center", color: colors.N100 }}>No records found</div>
                  )}
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default Details;
