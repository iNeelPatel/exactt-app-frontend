// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import Form, { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import Button from "@atlaskit/button";

// ====================================== File imports ======================================
import { AddSampleDetailFormProps } from "./types";
import { Divider } from "../../../components";

const AddSampleGroup = (props: AddSampleDetailFormProps) => {
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
                        <GridColumn medium={6}>
                        <Field label="Name" isRequired name="name">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>
                        </GridColumn>

                        <GridColumn medium={6}>
                        <Field label="Generic Name" isRequired name="genericName">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>
                        </GridColumn>
                        </Grid>

                        <Field label="Sample Group" isRequired name="sampleGroup">
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
                                 isLoading={false}
                                 placeholder="Search Sample Group"
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

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
});

export default connect(mapStateToProps)(AddSampleGroup);
