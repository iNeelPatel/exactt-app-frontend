// ====================================== Module imports ======================================
import React, { useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Select from "@atlaskit/select";
import { DatePicker } from "@atlaskit/datetime-picker";
import Button from "@atlaskit/button";
import moment from "moment";

// ====================================== File imports ========================================
import { ParameterDetailsProps } from "./types";
import { Divider } from "./../../../components";

const ParameterDetails = (props: ParameterDetailsProps) => {
   const { usersOptions, parameters, assignSample } = props;
   const [assignedParameters, setAssignedParameters] = useState(parameters);
   const [isSubmitting, setIsSubmitting] = useState(false);

   const handleAssignSubmit = async () => {
      console.log(assignedParameters);
      let formData = assignedParameters?.map((parameter) => ({
         objectId: parameter.objectId,
         assign_to: parameter.assign_to,
         assign_date: parameter.assign_date,
         due_date: parameter.due_date,
      }));
      setIsSubmitting(true);
      await assignSample(formData);
      setIsSubmitting(false);
   };

   console.log(parameters);

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

                  {assignedParameters?.map((parameter, idx) => (
                     <Grid layout="fluid">
                        <div style={{ display: "flex", flex: 1, alignItems: "center", marginTop: 5 }}>
                           <GridColumn medium={3}>{parameter.name}</GridColumn>
                           <GridColumn medium={2}>{parameter.department.get("name")}</GridColumn>
                           <GridColumn medium={3}>
                              <Select
                                 options={usersOptions}
                                 placeholder="Select user"
                                 onChange={(value) => {
                                    let updateAssignedParameters = assignedParameters.map((item, index) =>
                                       index === idx ? { ...item, assign_to: value } : item
                                    );
                                    setAssignedParameters(updateAssignedParameters);
                                 }}
                                 value={parameter.assign_to}
                              />
                           </GridColumn>
                           <GridColumn medium={2}>
                              <DatePicker
                                 dateFormat="DD/MM/YYYY"
                                 placeholder="Select date"
                                 defaultValue={undefined}
                                 onChange={(assign_date: string) => {
                                    let date = moment(assign_date, "YYYY-MM-DD").toDate();
                                    let updateAssignedParameters = assignedParameters.map((item, index) =>
                                       index === idx ? { ...item, assign_date: date } : item
                                    );
                                    setAssignedParameters(updateAssignedParameters);
                                 }}
                                 value={parameter.assign_date.toString()}
                              />
                           </GridColumn>
                           <GridColumn medium={2}>
                              <DatePicker
                                 dateFormat="DD/MM/YYYY"
                                 placeholder="Select date"
                                 onChange={(due_date: string) => {
                                    let date = moment(due_date, "YYYY-MM-DD").toDate();
                                    let updateAssignedParameters = assignedParameters.map((item, index) =>
                                       index === idx ? { ...item, due_date: date } : item
                                    );
                                    setAssignedParameters(updateAssignedParameters);
                                 }}
                                 value={parameter.due_date.toString()}
                              />
                           </GridColumn>
                        </div>
                     </Grid>
                  ))}

                  <Divider />
                  <div style={{ display: "flex", flex: 1, justifyContent: "flex-end" }}>
                     <Button appearance="primary" onClick={() => handleAssignSubmit()} isLoading={isSubmitting}>
                        Assign
                     </Button>
                  </div>
               </div>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default ParameterDetails;
