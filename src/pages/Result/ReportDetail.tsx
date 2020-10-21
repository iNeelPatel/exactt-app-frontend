// ====================================== Module imports ======================================
import React, { Fragment } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { DatePicker } from "@atlaskit/datetime-picker";
import { Checkbox } from "@atlaskit/checkbox";
import { typography, colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Divider, Heading } from "../../components";
import { ReportDetailProps } from "./types";

// borderBottomWidth: 1,
//                                           borderBottomColor: colors.N40,
//                                           borderBottomStyle: "solid",
//                                           paddingBottom: 10,
//                                           marginBottom: 5,

const TestDetailsForm = (props: ReportDetailProps) => {
   return (
      <Page>
         <Grid spacing="cosy" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     props.onSubmit(data);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps} noValidate={true}>
                        <Grid spacing="cosy" layout="fluid">
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
                        <Grid spacing="cosy" layout="fluid">
                           <GridColumn medium={12}>
                              <div className="scroll-view" style={{ overflow: "scroll", overflowX: "scroll" }}>
                                 <div style={{ display: "flex" }}>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          minWidth: 25,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       No.
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          minWidth: 150,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Parameter
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 80,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Division
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 120,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       HOD Name
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 120,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Chemist
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 170,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Result
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 60,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Unit
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 170,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Requirement
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 50,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       NABL
                                    </Heading>
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 60,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Nagative
                                    </Heading>
                                 </div>

                                 <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
                                    <div style={{ margin: 0, minWidth: 25 }}>1.</div>
                                    <div style={{ margin: 0, minWidth: 150 }}>pH</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 80 }}>Chemical</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 120 }}>Neel Patel</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 120 }}>Aman Patel</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 170 }}>
                                       <TextField isCompact style={{ maxWidth: 130 }} />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 60 }}>
                                       <TextField isCompact style={{ maxWidth: 40 }} value="pH" />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 170 }}>
                                       <TextField isCompact style={{ maxWidth: 140 }} />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 50 }}>
                                       <Checkbox value="Generate URL number" label="" onChange={() => {}} name="all-parameters" />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 60 }}>
                                       <Checkbox value="Generate URL number" label="" onChange={() => {}} name="all-parameters" />
                                    </div>
                                 </div>
                                 <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
                                    <div style={{ margin: 0, minWidth: 25 }}>2.</div>
                                    <div style={{ margin: 0, minWidth: 150 }}>pH</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 80 }}>Chemical</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 120 }}>Neel Patel</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 120 }}>Aman Patel</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 170 }}>
                                       <TextField isCompact style={{ maxWidth: 130 }} />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 60 }}>
                                       <TextField isCompact style={{ maxWidth: 40 }} value="pH" />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 170 }}>
                                       <TextField isCompact style={{ maxWidth: 140 }} />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 50 }}>
                                       <Checkbox value="Generate URL number" label="" onChange={() => {}} name="all-parameters" />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 60 }}>
                                       <Checkbox value="Generate URL number" label="" onChange={() => {}} name="all-parameters" />
                                    </div>
                                 </div>
                                 <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
                                    <div style={{ margin: 0, minWidth: 25 }}>3.</div>
                                    <div style={{ margin: 0, minWidth: 150 }}>pH</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 80 }}>Chemical</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 120 }}>Neel Patel</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 120 }}>Aman Patel</div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 170 }}>
                                       <TextField isCompact style={{ maxWidth: 130 }} />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 60 }}>
                                       <TextField isCompact style={{ maxWidth: 40 }} value="pH" />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 170 }}>
                                       <TextField isCompact style={{ maxWidth: 140 }} />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 50 }}>
                                       <Checkbox value="Generate URL number" label="" onChange={() => {}} name="all-parameters" />
                                    </div>
                                    <div style={{ margin: 0, paddingLeft: 4, minWidth: 60 }}>
                                       <Checkbox value="Generate URL number" label="" onChange={() => {}} name="all-parameters" />
                                    </div>
                                 </div>
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
