// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { typography, colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { CustomerDetailsProps } from "./types";
import { Heading } from "../../../components";

const CustomerDetails = (props: CustomerDetailsProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Heading mixin={typography.h400} style={{ marginTop: 10 }}>
                  SenseLab Inc.
               </Heading>
               <Grid layout="fluid">
                  <GridColumn medium={6}>
                     <div style={{ color: colors.N200 }}>
                        <div>Neel Patel</div>
                        <div>+91-9876787656</div>
                        <div>neelpatel@senselab.in</div>
                     </div>
                  </GridColumn>
                  <GridColumn medium={6}>
                     <div style={{ textAlign: "right", color: colors.N200 }}>
                        <div>E/1 Vasudev Bungalows, B/H Annpurna Hotel,</div>
                        <div>Jashodanagar, Vatva Road</div>
                        <div>Ahmedabad, Gujarat - 382445,</div>
                     </div>
                  </GridColumn>
               </Grid>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default CustomerDetails;
