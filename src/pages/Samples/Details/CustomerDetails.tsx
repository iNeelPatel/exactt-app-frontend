// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { typography, colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { CustomerDetailsProps } from "./types";
import { Heading } from "../../../components";

const CustomerDetails = (props: CustomerDetailsProps) => {
   const { customer } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Heading mixin={typography.h400} style={{ marginTop: 10 }}>
                  SenseLab Inc.
               </Heading>
               <Grid layout="fluid">
                  <GridColumn medium={6}>
                     <div style={{ color: colors.N300 }}>
                        <div>{customer?.contact.name}</div>
                        <div>{customer?.contact.phone}</div>
                        <div>{customer?.contact.email}</div>
                     </div>
                  </GridColumn>
                  <GridColumn medium={6}>
                     <div style={{ textAlign: "right", color: colors.N300 }}>
                        <div>{customer?.address?.line1}</div>
                        <div>{customer?.address?.line2}</div>
                        <div>
                           {customer?.address?.city} {customer?.address?.state} - {customer?.address?.zip}
                        </div>
                     </div>
                  </GridColumn>
               </Grid>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default CustomerDetails;
