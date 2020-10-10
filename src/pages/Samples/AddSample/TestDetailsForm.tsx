// ====================================== Module imports ======================================
import React, { Fragment, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import Select from "@atlaskit/select";

// ====================================== File imports ======================================
import { TestDetailsFormProps } from "./types";

const TestDetailsForm = (props: TestDetailsFormProps) => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     props.onSubmit(data);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps} noValidate={true}>
                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Sampling method"
                                 isRequired
                                 name="samplingMethod"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "SAMPLING_METHOD_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "SAMPLING_METHOD_REQUIRED" && <ErrorMessage>Sampling method is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={8}>
                              <Field
                                 label="Test group"
                                 isRequired
                                 name="testGroup"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "TEST_GROUP_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <Select
                                          {...fieldProps}
                                          validationState={error === "SAMPLING_METHOD_REQUIRED" && "error"}
                                          options={[
                                             { label: "Range", value: "range" },
                                             { label: "Valid", value: "valid" },
                                             { label: "Options", value: "options" },
                                             { label: "Complies", value: "complies" },
                                          ]}
                                          placeholder="Select test group"
                                       />
                                       {error === "TEST_GROUP_REQUIRED" && <ErrorMessage>Test group is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field
                           label="Parameters"
                           isRequired
                           name="parameters"
                           validate={(value: any) => {
                              if (!value) {
                                 return "PARAMETERS_REQUIRED";
                              }
                           }}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Select
                                    isMulti
                                    {...fieldProps}
                                    validationState={error === "SAMPLING_METHOD_REQUIRED" && "error"}
                                    options={[
                                       { label: "Range", value: "range" },
                                       { label: "Valid", value: "valid" },
                                       { label: "Options", value: "options" },
                                       { label: "Complies", value: "complies" },
                                    ]}
                                    placeholder="Select test group"
                                    menuIsOpen={dropdownOpen}
                                    onMenuOpen={() => setDropdownOpen(true)}
                                    onBlur={() => setDropdownOpen(false)}
                                 />
                                 {error === "PARAMETERS_REQUIRED" && <ErrorMessage>Test group is required.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>

                        <Field label="Instructions" name="instructions">
                           {({ fieldProps }: any) => <TextField {...fieldProps} />}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, marginBottom: 100 }}>
                           <Button appearance="link" onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Submit
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

export default TestDetailsForm;
