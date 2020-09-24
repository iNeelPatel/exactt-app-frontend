// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button";
import Toggle from "@atlaskit/toggle";

// ====================================== File imports ======================================
import { AddSampleGroupFormProps } from "./types";
import { Divider } from "../../../components";

const AddSampleGroup = (props: AddSampleGroupFormProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     console.log(data);

                     try {
                        await props.onSubmit(data);
                        props.onBack();
                     } catch (err) {
                        console.log(err);
                     }
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field label="Name" isRequired name="name">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Parameter" isRequired name="parameter">
                           {({ fieldProps }: any) => (
                              <Select
                                 isSearchable
                                 isMulti
                                 {...fieldProps}
                                 options={[
                                    { label: "Adelaide", value: "adelaide" },
                                    { label: "Brisbane", value: "brisbane" },
                                    { label: "Canberra", value: "canberra" },
                                    { label: "Darwin", value: "darwin" },
                                    { label: "Hobart", value: "hobart" },
                                    { label: "Melbourne", value: "melbourne" },
                                    { label: "Perth", value: "perth" },
                                    { label: "Sydney", value: "sydney" },
                                 ]}
                                 isLoading={false}
                                 placeholder="Search parameter"
                              />
                           )}
                        </Field>

                        <Divider />

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
                           <h4>1. Parameter Name</h4>
                           <div style={{ display: "flex", alignItems: "center" }}>
                              <span>NABL Type: </span>{" "}
                              <span>
                                 <Toggle id="toggle-large" size="large" />
                              </span>{" "}
                           </div>
                        </div>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field label="Validation type" isRequired name="type">
                                 {({ fieldProps }: any) => (
                                    <Select
                                       {...fieldProps}
                                       options={[
                                          { label: "Range", value: "range" },
                                          { label: "Valid", value: "Valid" },
                                          { label: "Options", value: "options" },
                                          { label: "Complies", value: "complies" },
                                       ]}
                                       placeholder="Search validation type"
                                    />
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Minimum value" isRequired name="min">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Maximum value" isRequired name="max">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Method" isRequired name="method">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Requirement" isRequired name="requirement">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Add parameter
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

export default AddSampleGroup;
