// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { AddParameterFormProps } from "./types";

const AddSampleGroup = (props: AddParameterFormProps) => {
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
                        <Grid>
                           <GridColumn medium={8}>
                              <Field label="Name" isRequired name="name">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Unit" isRequired name="unit">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <Field label="Method" isRequired name="method">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>
                        <Field label="Department" isRequired name="department">
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

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddSampleGroup);
