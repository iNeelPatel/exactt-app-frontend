// ====================================== Module imports ======================================
import React, { useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";

// ====================================== File imports ======================================
import { AddTestGroupFormProps } from "./types";

const AddTestGroupForm = (props: AddTestGroupFormProps) => {
   const [customeField, setCustomeField] = useState([""]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     delete data["customeField0"];
                     delete data["label"];
                     let customeFieldData = customeField.map((item, id) => {
                        delete data[`customeField${id}`];
                        return item ? item : undefined;
                     });

                     customeFieldData = customeFieldData.filter((item) => item !== undefined);

                     try {
                        await props.onSubmit({ ...data, customeFields: customeFieldData });
                        props.onBack();
                     } catch (err) {
                        console.log(err);
                     }
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Grid>
                           <GridColumn medium={7}>
                              <Field label="Name" isRequired name="name">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={5}>
                              <Field
                                 label="Code"
                                 isRequired
                                 name="code"
                                 validate={(value) => {
                                    if (!value) {
                                       return;
                                    }

                                    var gst_format = /[A-Z]{3}/;

                                    if (!value.match(gst_format)) {
                                       return "NOT_BLOCK_LETTERS";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <React.Fragment>
                                       <Textfield {...fieldProps} maxLength={3} />
                                       {error === "NOT_BLOCK_LETTERS" && <ErrorMessage>Code should be in block letter.</ErrorMessage>}
                                    </React.Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field name="label" label="Custom field">
                           {() => <div />}
                        </Field>

                        {customeField.map((item, index) => (
                           <Grid>
                              <GridColumn medium={10} css={{ background: "red" }}>
                                 <Field name={`customeField${index}`}>
                                    {({ fieldProps }: any) => (
                                       <Textfield
                                          {...fieldProps}
                                          onChange={(e: any) => {
                                             let updateFieldList: any = customeField.map((data, id) =>
                                                id === index ? e.target.value : data
                                             );
                                             setCustomeField(updateFieldList);
                                          }}
                                          value={item}
                                       />
                                    )}
                                 </Field>
                              </GridColumn>
                              <GridColumn medium={2} css={{ background: "red" }}>
                                 <Button
                                    isDisabled={!item || submitting}
                                    appearance="subtle"
                                    onClick={() => {
                                       let updateCustomeField = customeField.filter((data, id) => id !== index);
                                       setCustomeField(updateCustomeField);
                                    }}
                                    shouldFitContainer
                                    style={{ height: 40, marginTop: 8 }}
                                 >
                                    Remove
                                 </Button>
                              </GridColumn>
                           </Grid>
                        ))}
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 5 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => setCustomeField([...customeField, ""])}>
                              Add more customer field
                           </Button>
                        </div>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Add test group
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

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddTestGroupForm);
