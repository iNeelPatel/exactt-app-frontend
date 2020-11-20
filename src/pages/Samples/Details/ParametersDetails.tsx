// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Select from "@atlaskit/select";
import { DatePicker } from "@atlaskit/datetime-picker";
import Button from "@atlaskit/button";

// ====================================== File imports ========================================
import { ParameterDetailsProps } from "./types";
import { Divider } from "./../../../components";

const ParameterDetails = (props: ParameterDetailsProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <div style={{ paddingLeft: 20, paddingRight: 20 }}>
                  <Grid layout="fluid">
                     <GridColumn medium={3}>Parameter</GridColumn>
                     <GridColumn medium={2}>Department</GridColumn>
                     <GridColumn medium={3}>Assign to</GridColumn>
                     <GridColumn medium={2}>Allotment date</GridColumn>
                     <GridColumn medium={2}>Due date</GridColumn>
                  </Grid>
                  <Divider />
                  <Grid layout="fluid">
                     <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
                        <GridColumn medium={3}>pH</GridColumn>
                        <GridColumn medium={2}>Chemical</GridColumn>
                        <GridColumn medium={3}>
                           <Select
                              options={[
                                 { label: "Range", value: "range" },
                                 { label: "Valid", value: "valid" },
                                 { label: "Options", value: "options" },
                                 { label: "Complies", value: "complies" },
                              ]}
                              placeholder="Select user"
                           />
                        </GridColumn>
                        <GridColumn medium={2}>
                           <DatePicker dateFormat="DD/MM/YYYY" placeholder="Select date" defaultValue={undefined} />
                        </GridColumn>
                        <GridColumn medium={2}>
                           <DatePicker dateFormat="DD/MM/YYYY" placeholder="Select date" defaultValue={undefined} />
                        </GridColumn>
                     </div>
                  </Grid>
                  <Grid layout="fluid">
                     <div style={{ display: "flex", flex: 1, alignItems: "center", marginTop: 10 }}>
                        <GridColumn medium={3}>pH</GridColumn>
                        <GridColumn medium={2}>Chemical</GridColumn>
                        <GridColumn medium={3}>
                           <Select
                              options={[
                                 { label: "Range", value: "range" },
                                 { label: "Valid", value: "valid" },
                                 { label: "Options", value: "options" },
                                 { label: "Complies", value: "complies" },
                              ]}
                              placeholder="Select user"
                           />
                        </GridColumn>
                        <GridColumn medium={2}>
                           <DatePicker dateFormat="DD/MM/YYYY" placeholder="Select date" defaultValue={undefined} />
                        </GridColumn>
                        <GridColumn medium={2}>
                           <DatePicker dateFormat="DD/MM/YYYY" placeholder="Select date" defaultValue={undefined} />
                        </GridColumn>
                     </div>
                  </Grid>
                  <Divider />
                  <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
                     <Button appearance="primary">Assign</Button>
                  </div>
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default ParameterDetails;
