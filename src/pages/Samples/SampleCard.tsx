// ====================================== Module imports ======================================
import React from "react";
import { colors, typography } from "@atlaskit/theme";
import Lozenge from "@atlaskit/lozenge";

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
   return (
      <div style={styles.card} onClick={() => props.onClick()}>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Heading mixin={typography.h400} style={{ marginTop: 0 }}>
               HTL-KSZ-201008043
            </Heading>
            <Lozenge appearance="success">Complete</Lozenge>
         </div>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>Sample Name (comodity name)</div>
            <div>Customer name | +91 984755938</div>
         </div>
         <div style={{ display: "flex" }}>
            <div style={styles.item}>
               <div style={styles.label}>Due date</div>
               <div style={styles.text}>24/10/2020</div>
            </div>
            <div style={styles.item}>
               <div style={styles.label}>Parameters</div>
               <div style={styles.text}>
                  <div style={styles.parameterTag}>
                     <Lozenge appearance="success">pH</Lozenge>
                  </div>
                  <div style={styles.parameterTag}>
                     <Lozenge appearance="inprogress">Color</Lozenge>
                  </div>
                  <div style={styles.parameterTag}>
                     <Lozenge appearance="removed">TDS</Lozenge>
                  </div>
                  <div style={styles.parameterTag}>
                     <Lozenge appearance="inprogress">Heavy metals</Lozenge>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SampleCard;
