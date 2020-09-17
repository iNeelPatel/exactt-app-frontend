// ====================================== Module imports ======================================
import React, { useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";

// ====================================== File imports ======================================
import { AddSampleGroupForm } from "./types";

const AddTestGroup = (props: AddSampleGroupForm) => {
   const [customeField, setCustomeField] = useState([""]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (userData: any) => {
                     try {
                        await props.onSubmit(userData);
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

                                    var gst_format = /[A-Z]/;

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

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Add sample group
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

export default connect(mapStateToProps)(AddTestGroup);
