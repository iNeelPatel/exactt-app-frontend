// ====================================== Module imports ======================================
import React, { Fragment } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { DatePicker } from "@atlaskit/datetime-picker";
import { Checkbox } from "@atlaskit/checkbox";
import { typography } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Divider, Heading } from "../../components";
import { ReportDetailProps } from "./types";

const TestDetailsForm = (props: ReportDetailProps) => {
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
                        <Grid spacing="compact" layout="fluid">
                           <GridColumn medium={3}>
                              <Field label="Analysis date" isRequired name="analysisDate">
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="select date" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={3}>
                              <Field label="Complete date" isRequired name="completeDate">
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="select date" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={3}>
                              <Field label="Report date" isRequired name="reportDate">
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="select date" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={3}>
                              <Field label="URL" name="url">
                                 {({ fieldProps }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       <Checkbox
                                          value="Generate URL number"
                                          label="Generate URL number"
                                          onChange={() => {}}
                                          name="all-parameters"
                                       />
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <Divider />
                        <Grid>
                           <GridColumn medium={12}>
                              <div style={{ display: "flex", padding: 10 }}>
                                 <Heading mixin={typography.h200} style={{ margin: 0, flex: 0.2 }}>
                                    Parameter
                                 </Heading>
                                 <Heading mixin={typography.h200} style={{ margin: 0, flex: 0.15 }}>
                                    Division
                                 </Heading>
                                 <Heading mixin={typography.h200} style={{ margin: 0, flex: 0.2 }}>
                                    HOD Name
                                 </Heading>
                                 <Heading mixin={typography.h200} style={{ margin: 0, flex: 0.15 }}>
                                    Chemist
                                 </Heading>
                                 <Heading mixin={typography.h200} style={{ margin: 0, flex: 0.2 }}>
                                    Result
                                 </Heading>
                                 <Heading mixin={typography.h200} style={{ margin: 0, flex: 0.1 }}>
                                    Unit
                                 </Heading>
                                 <Heading mixin={typography.h200} style={{ margin: 0, flex: 0.2 }}>
                                    Requirement
                                 </Heading>
                              </div>
                           </GridColumn>
                        </Grid>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, marginBottom: 100 }}>
                           <Button appearance="link" onClick={() => {}}>
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
