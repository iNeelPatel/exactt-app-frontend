// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { typography, colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { DetailsProps } from "./types";
import { Heading } from "../../../components";

const Details = (props: DetailsProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Heading mixin={typography.h500} style={{ marginTop: 10 }}>
                  {props.customer.name}
               </Heading>
               <Grid>
                  <GridColumn medium={6}>
                     <div style={{ color: colors.N200 }}>
                        <div>{props.customer.contact.name}</div>
                        <div>{props.customer.contact.phone}</div>
                        <div>{props.customer.contact.email}</div>
                     </div>
                  </GridColumn>
                  <GridColumn medium={6}>
                     <div style={{ textAlign: "right", color: colors.N200 }}>
                        <div>{props.customer.address.line1}</div>
                        <div>{props.customer.address.line2}</div>
                        <div>{props.customer.address.city}, {props.customer.address.state} - {props.customer.address.zip},</div>
                     </div>
                  </GridColumn>
               </Grid>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default Details;
