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
   const { edit, editUser } = props;
   let editUserPhoneCode: object | undefined;

   if (edit) {
      editUserPhoneCode = PhoneCodeList.find((code) => code.value.toString() === editUser?.phone?.split("-")[0]?.split("+")[1]);
   }

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (userData: UserData) => {
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
                        <Field label="Username" isRequired name="username" defaultValue={edit ? editUser.username : ""}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Name" isRequired name="name" defaultValue={edit ? editUser.name : ""}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field
                           label="Email"
                           isRequired
                           name="email"
                           defaultValue={edit ? editUser.email : ""}
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
                              <Field
                                 label="Country code"
                                 isRequired
                                 name="countryCode"
                                 defaultValue={editUserPhoneCode ? editUserPhoneCode : { label: "+91 India", value: 91 }}
                              >
                                 {({ fieldProps }: any) => <Select {...fieldProps} options={PhoneCodeList} placeholder="Country code" />}
                              </Field>
                           </GridColumn>
                           {console.log(editUser?.phoneNumber?.split("-")[1])}
                           <GridColumn medium={9}>
                              <Field label="Phone" isRequired name="phone" defaultValue={edit ? editUser?.phone?.split("-")[1] : ""}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} maxLength={10} />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Grid>
                           <GridColumn medium={6}>
                              <Field
                                 label="Department"
                                 isRequired
                                 name="department"
                                 defaultValue={edit ? { label: editUser.department.name, value: editUser.department.objectId } : ""}
                              >
                                 {({ fieldProps }: any) => (
                                    <Select {...fieldProps} options={props.departmentList} placeholder="Select department" />
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field
                                 label="Role"
                                 isRequired
                                 name="role"
                                 defaultValue={edit ? { label: editUser.role.name, value: editUser.role.objectId } : ""}
                              >
                                 {({ fieldProps }: any) => <Select {...fieldProps} options={props.roleList} placeholder="Select role" />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              {edit ? "Edit user" : "Add user"}
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
