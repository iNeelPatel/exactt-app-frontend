// ====================================== Module imports ======================================
import React, { Fragment, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import TextField from "@atlaskit/textfield";
import Button from "@atlaskit/button";
import { DatePicker } from "@atlaskit/datetime-picker";
import { Checkbox } from "@atlaskit/checkbox";
import { typography, colors } from "@atlaskit/theme";
import Select from "@atlaskit/select";

// ====================================== File imports ======================================
import { Divider, Heading } from "../../components";
import { ReportDetailProps } from "./types";
import { SampleResultParameters } from "../../redux/types/SampleTypes";

const TestDetailsForm = (props: ReportDetailProps) => {
   const { parameters } = props;
   const [resultsParameter, setResultsParameter] = useState<SampleResultParameters[] | undefined>(parameters);

   console.log(resultsParameter);

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
                                          minWidth: 120,
                                          borderBottomWidth: 1,
                                          borderBottomColor: colors.N40,
                                          borderBottomStyle: "solid",
                                          paddingBottom: 10,
                                          marginBottom: 5,
                                       }}
                                    >
                                       Division
                                    </Heading>
                                    {/* <Heading
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
                                    </Heading> */}
                                    <Heading
                                       mixin={typography.h200}
                                       style={{
                                          margin: 0,
                                          paddingLeft: 4,
                                          minWidth: 150,
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
                                          minWidth: 90,
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
                                 {resultsParameter?.map((parameter, idx) => {
                                    let validOptions;
                                    let invalidOptions;
                                    let options;
                                    if (parameter.condition_type === "options") {
                                       validOptions = parameter.validation.validOptions
                                          ?.split(",")
                                          ?.concat(parameter.validation.invalidOptions.split(","))
                                          ?.map((option: any) => ({ label: option, value: option }));
                                       invalidOptions = parameter.validation.invalidOptions.split(",");
                                       options = validOptions
                                          .concat(invalidOptions)
                                          .map((option: any) => ({ label: option, value: option }));
                                    }

                                    return (
                                       <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
                                          <div style={{ margin: 0, minWidth: 25, maxWidth: 25 }}>{idx + 1}.</div>
                                          <div style={{ margin: 0, minWidth: 150, maxWidth: 150 }}>{parameter.name}</div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 120, maxWidth: 120 }}>
                                             {parameter?.department?.get("name")}
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 150, maxWidth: 150 }}>
                                             {parameter.assign_to.name}
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 170, maxWidth: 170 }}>
                                             {parameter.condition_type === "range" ? (
                                                <TextField
                                                   type="number"
                                                   style={{ maxWidth: 170 }}
                                                   onChange={(event: any) => {
                                                      let result = event.target.value;
                                                      let resultInt = parseInt(result);
                                                      let nagative = !(
                                                         resultInt >= parameter.validation.min && resultInt <= parameter.validation.max
                                                      );
                                                      let updateParameters: any = resultsParameter.map((data, index) =>
                                                         index === idx ? { ...data, result, nagative } : data
                                                      );
                                                      setResultsParameter(updateParameters);
                                                   }}
                                                   value={parameter.result}
                                                />
                                             ) : null}
                                             {parameter.condition_type === "options" ? (
                                                <Select options={options} placeholder="Select option" />
                                             ) : null}
                                             {parameter.condition_type === "valid" ? (
                                                <Select
                                                   options={parameter.validation.validResult
                                                      ?.split(",")
                                                      ?.concat(parameter.validation.invalidResult.split(","))
                                                      ?.map((option: any) => ({ label: option, value: option }))}
                                                   placeholder="Select option"
                                                />
                                             ) : null}
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 90, maxWidth: 90 }}>
                                             <TextField style={{ maxWidth: 90 }} value={parameter.parameter.unit} />
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 170, maxWidth: 170 }}>
                                             <TextField value={parameter.requirement} />
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 50, maxWidth: 50 }}>
                                             <Checkbox
                                                value="Generate URL number"
                                                label=""
                                                isChecked={parameter.nabl}
                                                onChange={() => {}}
                                                name="all-parameters"
                                             />
                                          </div>
                                          <div style={{ margin: 0, paddingLeft: 4, minWidth: 60, maxWidth: 60, cursor: "pointer" }}>
                                             {parameter.result ? (
                                                parameter.nagative ? (
                                                   <span style={{ fontWeight: "bolder" }}>Yes</span>
                                                ) : (
                                                   <span>No</span>
                                                )
                                             ) : (
                                                <span>-</span>
                                             )}
                                          </div>
                                       </div>
                                    );
                                 })}
                              </div>
                           </GridColumn>
                        </Grid>

                        <Divider />

                        <Grid spacing="cosy" layout="fluid">
                           <GridColumn medium={12}>Document picker here</GridColumn>
                        </Grid>

                        <Grid spacing="cosy" layout="fluid">
                           <GridColumn medium={8}>
                              <Field label="Remarks" name="remarks">
                                 {({ fieldProps }: any) => <TextField {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Authorized Signature" name="remarks">
                                 {({ fieldProps }: any) => <TextField {...fieldProps} />}
                              </Field>
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
