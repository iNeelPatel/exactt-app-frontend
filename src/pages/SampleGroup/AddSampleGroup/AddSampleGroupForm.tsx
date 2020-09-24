// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button";

// ====================================== File imports ======================================
import { AddSampleGroupFormProps } from "./types";

const AddSampleGroup = (props: AddSampleGroupFormProps) => {
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
                        <Field label="Name" isRequired name="name">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Parameter" isRequired name="parameter">
                           {({ fieldProps }: any) => (
                              <Select
                                 isSearchable
                                 isMulti
                                 {...fieldProps}
                                 options={[
                                    { label: "Adelaide", value: "adelaide" },
                                    { label: "Brisbane", value: "brisbane" },
                                    { label: "Canberra", value: "canberra" },
                                    { label: "Darwin", value: "darwin" },
                                    { label: "Hobart", value: "hobart" },
                                    { label: "Melbourne", value: "melbourne" },
                                    { label: "Perth", value: "perth" },
                                    { label: "Sydney", value: "sydney" },
                                 ]}
                                 isLoading={true}
                                 placeholder="Search parameter"
                              />
                           )}
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

export default AddSampleGroup;
