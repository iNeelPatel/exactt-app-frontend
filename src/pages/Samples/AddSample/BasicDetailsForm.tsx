// ====================================== Module imports ======================================
import React, { Fragment } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Select from "@atlaskit/select";
import { DatePicker } from "@atlaskit/datetime-picker";
import Button from "@atlaskit/button";

// ====================================== File imports ======================================
import { BasicDetailsFormProps } from "./types";

const BasicDetailsForm = (props: BasicDetailsFormProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn>
               <Form
                  onSubmit={async (data: any) => {
                     console.log(data);
                     // props.onSubmit(data);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field
                           label="Customer"
                           isRequired
                           name="customer"
                           validate={(value: any) => {
                              if (!value) {
                                 return "CUSTOMER_REQUIRED";
                              }
                           }}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Select
                                    {...fieldProps}
                                    validationState={error === "CUSTOMER_REQUIRED" && "error"}
                                    options={[
                                       { label: "Range", value: "range" },
                                       { label: "Valid", value: "valid" },
                                       { label: "Options", value: "options" },
                                       { label: "Complies", value: "complies" },
                                    ]}
                                    placeholder="Select customer"
                                 />
                                 {error === "CUSTOMER_REQUIRED" && <ErrorMessage>Customer is required.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>
                        <Grid>
                           <GridColumn medium={6}>
                              <Field
                                 label="Test Group"
                                 isRequired
                                 name="testGroup"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "GROUP_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <Select
                                          {...fieldProps}
                                          validationState={error === "GROUP_REQUIRED" && "error"}
                                          options={[
                                             { label: "Range", value: "range" },
                                             { label: "Valid", value: "valid" },
                                             { label: "Options", value: "options" },
                                             { label: "Complies", value: "complies" },
                                          ]}
                                          placeholder="Select Group"
                                       />
                                       {error === "GROUP_REQUIRED" && <ErrorMessage>Test group is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field label="Date" isRequired name="date" defaultValue={new Date()}>
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" isDisabled />}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <Grid>
                           <GridColumn medium={6}>
                              <Field
                                 label="Due date"
                                 isRequired
                                 name="dueDate"
                                 defaultValue={new Date()}
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="Select date" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field
                                 label="Lab due date"
                                 isRequired
                                 name="labDueDate"
                                 defaultValue={new Date()}
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="Select date" />}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Next
                           </Button>
                        </div>
                     </form>
                  )}
               </Form>
            </GridColumn>
         </Grid>
      </Page>
   );
};

export default BasicDetailsForm;
