// ====================================== Module imports ======================================
import React, { Fragment } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";

// ====================================== File imports ======================================

const AddUserForm = () => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (userData: any) => {
                     console.log(userData);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field label="Username" isRequired name="username" defaultValue="">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field label="Name" isRequired name="name" defaultValue="">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field label="Email" isRequired name="email" defaultValue="">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field label="Phone" isRequired name="phone" defaultValue="">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Grid>
                           <GridColumn medium={6}>
                              <Field label="Department" isRequired name="department" defaultValue="">
                                 {({ fieldProps }: any) => (
                                    <Fragment>
                                       <Textfield {...fieldProps} />
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field label="Role" isRequired name="role" defaultValue="">
                                 {({ fieldProps }: any) => (
                                    <Fragment>
                                       <Textfield {...fieldProps} />
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Password" isRequired name="password" defaultValue="">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield type="password" {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button type="submit" appearance="link" isLoading={submitting}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Add user
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

export default AddUserForm;
