// ====================================== Module imports ======================================
import React, { Fragment } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";

// ====================================== File imports ======================================
import { AddUserFormProps, UserData } from "./types";
import PhoneCodeList from "../../../constants/phone-code.json";

const AddUserForm = (props: AddUserFormProps) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (userData: UserData) => {
                     props.onSubmit(userData);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field label="Username" isRequired name="username" defaultValue="">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Name" isRequired name="name">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field
                           label="Email"
                           isRequired
                           name="email"
                           defaultValue=""
                           validate={(value) => {
                              if (!value) {
                                 return;
                              }

                              var mailformat = /\S+@\S+\.\S+/;

                              if (!value.match(mailformat)) {
                                 return "INVALID_EMAIL";
                              }
                           }}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                                 {error === "INVALID_EMAIL" && <ErrorMessage>Please enter valid email address.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>

                        <Grid>
                           <GridColumn medium={3}>
                              <Field label="Country code" isRequired name="countryCode" defaultValue={{ label: "+91 India", value: 91 }}>
                                 {({ fieldProps }: any) => <Select {...fieldProps} options={PhoneCodeList} placeholder="Country code" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={9}>
                              <Field label="Phone" isRequired name="phone" defaultValue="">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Grid>
                           <GridColumn medium={6}>
                              <Field label="Department" isRequired name="department">
                                 {({ fieldProps }: any) => (
                                    <Select {...fieldProps} options={props.departmentList} placeholder="Select department" />
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field label="Role" isRequired name="role" defaultValue="">
                                 {({ fieldProps }: any) => (
                                    <Select {...fieldProps} options={props.departmentList} placeholder="Select role" />
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Password" isRequired name="password" defaultValue="">
                           {({ fieldProps }: any) => <Textfield type="password" {...fieldProps} />}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
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
