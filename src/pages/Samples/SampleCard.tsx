// ====================================== Module imports ======================================
import React from "react";
import { colors, typography } from "@atlaskit/theme";
import Lozenge from "@atlaskit/lozenge";
import moment from "moment";
// ====================================== File imports ======================================
import { SampleCardProps } from "./types";
import { Heading } from "../../components";

const styles = {
   card: {
      margin: 5,
      marginBottom: 8,
      background: colors.N0,
      padding: 5,
      borderRadius: 3,
      cursor: "pointer",
   },
   item: {
      display: "flex",
   },
   label: {
      alignItems: "flex-start",
   },
   text: {
      display: "flex",
      flex: 1,
      color: colors.N300,
      paddingRight: 20,
      marginLeft: 5,
   },
   parameterTag: {
      paddingRight: 5,
   },
};

const SampleCard = (props: SampleCardProps) => {
   const { sample, prefix } = props;
   return (
      <div style={styles.card} onClick={() => props.onClick()}>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Heading mixin={typography.h400} style={{ marginTop: 0 }}>
               {`${prefix}-${sample.sampleId}`}
            </Heading>
            {sample.status === 0 && (
               <Lozenge appearance="removed" isBold>
                  Pending
               </Lozenge>
            )}
            {sample.status === 1 && (
               <Lozenge appearance="inprogress" isBold>
                  In progress
               </Lozenge>
            )}
            {sample.status === 2 && (
               <Lozenge appearance="success" isBold>
                  Complete
               </Lozenge>
            )}
         </div>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
               {sample.name} ({sample.generic_name})
            </div>
            <div>
               {sample.customer.name} | {sample.customer.phone}
            </div>
         </div>
         <div style={{ display: "flex" }}>
            <div style={styles.item}>
               <div style={styles.label}>Due date :</div>
               <div style={styles.text}>{moment(sample.due_date).format("DD/MM/YYYY")}</div>
            </div>
            <div style={styles.item}>
               <div style={styles.label}>Parameters :</div>
               <div style={styles.text}>
                  {sample.sampleResultParameters.map((sampleResultParameters) => (
                     <div style={styles.parameterTag}>
                        {sampleResultParameters.status === 0 && <Lozenge appearance="removed">{sampleResultParameters.name}</Lozenge>}
                        {sampleResultParameters.status === 1 && <Lozenge appearance="inprogress">{sampleResultParameters.name}</Lozenge>}
                        {sampleResultParameters.status === 2 && <Lozenge appearance="success">{sampleResultParameters.name}</Lozenge>}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
};

export default SampleCard;
