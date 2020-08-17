// ====================================== Module imports ======================================
import React, { useState } from "react";
import { ProgressTracker, Stages } from "@atlaskit/progress-tracker";
import Button from "@atlaskit/button";
import { colors, fontFamily, typography } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Box, Heading } from "../../components";
import "./organization.css";

const Organization = () => {
   const [step, setStep] = useState(0);
   const exactt_logo = require("../../assets/images/exactt_logo.png");

   const items: Stages = [
      {
         id: "0",
         label: "Basic Details",
         percentageComplete: 0,
         status: "current",
      },
      {
         id: "1",
         label: "Contact Details",
         percentageComplete: 0,
         status: "unvisited",
      },
      {
         id: "2",
         label: "Accounting Details",
         percentageComplete: 0,
         status: "unvisited",
      },
   ];

   const stepItems: Stages = items.map((item) => {
      if (parseInt(item.id) === step) {
         return {
            ...item,
            percentageComplete: 0,
            status: "current",
         };
      } else if (parseInt(item.id) < step) {
         return {
            ...item,
            percentageComplete: 100,
            status: "visited",
         };
      } else {
         return item;
      }
   });

   return (
      <div className="container" style={{ background: colors.N10 }}>
         <div>
            <img src={exactt_logo} className="logo" alt="exactt-logo" />
         </div>

         <Box elevation="e300" style={{ width: 800 }}>
            <Heading mixin={typography.h500} style={{ marginTop: 10 }}>
            Enter your orgnization details
            </Heading>
            <ProgressTracker items={stepItems} animated={true} spacing="cosy" />
            <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "flex-end", marginTop: 30 }}>
               <Button
                  appearance="link"
                  onClick={() => {
                     if (step !== 0) {
                        setStep(step - 1);
                     }
                  }}
               >
                  Back
               </Button>
               {step !== 2 ? (
                  <Button appearance="primary" onClick={() => setStep(step + 1)}>
                     Next
                  </Button>
               ) : (
                  <Button appearance="primary">Submit</Button>
               )}
            </div>
         </Box>
      </div>
   );
};

export default Organization;
