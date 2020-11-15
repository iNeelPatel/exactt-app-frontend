// ====================================== Module imports ======================================
import React, { Fragment } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Select, { CreatableSelect } from "@atlaskit/select";
import TextField from "@atlaskit/textfield";
import { DatePicker } from "@atlaskit/datetime-picker";
import Button from "@atlaskit/button";

// ====================================== File imports ======================================
import { SampleFormProps } from "./types";

const SampleForm = (props: SampleFormProps) => {
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
                        <Field
                           label="Sample Name"
                           isRequired
                           name="sampleName"
                           validate={(value: any) => {
                              if (!value) {
                                 return "SAMPLE_NAME_REQUIRED";
                              }
                           }}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <CreatableSelect
                                    {...fieldProps}
                                    validationState={error === "SAMPLE_NAME_REQUIRED" && "error"}
                                    options={[
                                       { label: "Range", value: "range" },
                                       { label: "Valid", value: "valid" },
                                       { label: "Options", value: "options" },
                                       { label: "Complies", value: "complies" },
                                    ]}
                                    placeholder="Select customer"
                                 />
                                 {error === "SAMPLE_NAME_REQUIRED" && <ErrorMessage>Sample name is required.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>
                        <Field
                           label="Generic name"
                           isRequired
                           name="genericName"
                           validate={(value: any) => {
                              if (!value) {
                                 return "GENERIC_NAME_REQUIRED";
                              }
                           }}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <TextField {...fieldProps} />
                                 {error === "GENERIC_NAME_REQUIRED" && <ErrorMessage>Generic name is required.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Collection date"
                                 isRequired
                                 name="collectionDate"
                                 defaultValue={undefined}
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "COLLECTION_DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="Select date" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Manufacture date"
                                 isRequired
                                 name="mfgDate"
                                 defaultValue={undefined}
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "MFG_DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="Select date" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Expiration date"
                                 isRequired
                                 name="expDate"
                                 defaultValue={undefined}
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "EXP_DATE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="Select date" />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Sample code"
                                 isRequired
                                 name="sampleCode"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "SAMPLE_CODE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "SAMPLE_CODE_REQUIRED" && <ErrorMessage>Sample code is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Brand name"
                                 isRequired
                                 name="brandName"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "BRAND_NAME_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "BRAND_NAME_REQUIRED" && <ErrorMessage>Brand name is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Manufacture"
                                 isRequired
                                 name="manufacture"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "MANUFACTURE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "MANUFACTURE_REQUIRED" && <ErrorMessage>Manufacture is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Marking"
                                 isRequired
                                 name="marking"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "MARKING_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "MARKING_REQUIRED" && <ErrorMessage>Marking is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Supplier / Importer"
                                 isRequired
                                 name="supplier"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "SUPPLIER_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "SUPPLIER_REQUIRED" && <ErrorMessage>Supplier / Importer is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Batch / Lot No."
                                 isRequired
                                 name="batchNo"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "BATCH_NO_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "BATCH_NO_REQUIRED" && <ErrorMessage>Batch / Lot No. is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Rec. Qty / Batch Size"
                                 isRequired
                                 name="batchSize"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "BATCH_SIZE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "BATCH_SIZE_REQUIRED" && <ErrorMessage>Rec. Qty / Batch Size is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Drug lic. No."
                                 isRequired
                                 name="licNo"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "LIC_NO_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "LIC_NO_REQUIRED" && <ErrorMessage>Drug lic. No. is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Type"
                                 isRequired
                                 name="type"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "TYPE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "TYPE_REQUIRED" && <ErrorMessage>Type is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Description" name="description">
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <TextField {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Sample packing"
                                 isRequired
                                 name="samplePacking"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "PACKING_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "PACKING_REQUIRED" && <ErrorMessage>Sample packing is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Sample quantity"
                                 isRequired
                                 name="sampleQty"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "QTY_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "QTY_REQUIRED" && <ErrorMessage>Sample quantity is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Sample Condition"
                                 isRequired
                                 name="sampleCondition"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "SAMPLE_CONDITION_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "SAMPLE_CONDITION_REQUIRED" && <ErrorMessage>Sample Condition is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Serving size"
                                 isRequired
                                 name="servingSize"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "SERVING_SIZE_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "SERVING_SIZE_REQUIRED" && <ErrorMessage>Serving size is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Env condition"
                                 isRequired
                                 name="envCondition"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "ENV_CONDITION_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "ENV_CONDITION_REQUIRED" && <ErrorMessage>Env condition is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="Collected by"
                                 isRequired
                                 name="conllectedBy"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "COLLECTED_BY_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <Select
                                          {...fieldProps}
                                          validationState={error === "SAMPLE_NAME_REQUIRED" && "error"}
                                          options={[
                                             { label: "Range", value: "range" },
                                             { label: "Valid", value: "valid" },
                                             { label: "Options", value: "options" },
                                             { label: "Complies", value: "complies" },
                                          ]}
                                          placeholder="Select customer"
                                       />
                                       {error === "COLLECTED_BY_REQUIRED" && <ErrorMessage>Collected by is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, marginBottom: 100 }}>
                           <Button appearance="link" onClick={() => props.onBack()}>
                              Back
                           </Button>
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

export default SampleForm;
