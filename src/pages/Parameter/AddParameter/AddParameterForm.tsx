// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";

// ====================================== File imports ======================================
import { AddParameterFormProps } from "./types";

const AddSampleGroup = (props: AddParameterFormProps) => {
   const { edit, editData } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     try {
                        await props.onSubmit({ ...data, department: data.department.value });
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
                              <Field label="Name" isRequired name="name" defaultValue={edit && editData ? editData.name : undefined}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Unit" isRequired name="unit" defaultValue={edit && editData ? editData.unit : undefined}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <Field label="Method" isRequired name="method" defaultValue={edit && editData ? editData.method : undefined}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>
                        <Field
                           label="Department"
                           isRequired
                           name="department"
                           defaultValue={
                              edit &&
                              editData &&
                              props.departmentList.find((department) => department.value === editData.department.objectId)
                           }
                        >
                           {({ fieldProps }: any) => (
                              <Select {...fieldProps} options={props.departmentList} placeholder="Select department" />
                           )}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              {edit ? "Edit parameter" : "Add parameter"}
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

export default AddSampleGroup;
