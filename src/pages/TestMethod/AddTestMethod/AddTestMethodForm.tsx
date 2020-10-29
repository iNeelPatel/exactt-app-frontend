// ====================================== Module imports ======================================
import React, { useState, Fragment, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select, { CreatableSelect } from "@atlaskit/select";
import Button from "@atlaskit/button";
import Toggle from "@atlaskit/toggle";

// ====================================== File imports ======================================
import { AddTestMethodFormProps } from "./types";
import { Divider } from "../../../components";

const createOption = (label: string) => ({
   label,
   value: label.toLowerCase().replace(/\W/g, ""),
});

const AddTestMethod = (props: AddTestMethodFormProps) => {
   const [type, setType] = useState("");
   const [createOptions, setCreateOptions] = useState<any>([]);
   const [optionValue, setOptionValue] = useState<any>([]);
   const [dropdownOpen, setDropdownOpen] = useState(false);

   const handleChange = (newValue: any) => {
      setOptionValue(newValue);
      setCreateOptions(newValue);
   };

   const handleCreate = (inputValue: any) => {
      const newOption = createOption(inputValue);
      if (createOptions) {
         setCreateOptions([...createOptions, newOption]);
      } else {
         setCreateOptions([newOption]);
      }
   };

   useEffect(() => {
      setOptionValue(createOptions);
   }, [createOptions]);

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
                                 isLoading={false}
                                 menuIsOpen={dropdownOpen}
                                 onMenuOpen={() => setDropdownOpen(true)}
                                 placeholder="Search parameter"
                                 onBlur={() => setDropdownOpen(false)}
                              />
                           )}
                        </Field>

                        <Divider />

                        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
                           <h4>1. Parameter Name</h4>
                           <div style={{ display: "flex", alignItems: "center" }}>
                              <span>NABL Type: </span>
                              <span>
                                 <Toggle id="toggle-large" size="large" />
                              </span>
                           </div>
                        </div>

                        <Grid>
                           <GridColumn medium={type ? (type === "complies" ? 12 : 4) : 12}>
                              <Field label="Validation type" isRequired name="type">
                                 {({ fieldProps }: any) => (
                                    <Select
                                       {...fieldProps}
                                       options={[
                                          { label: "Range", value: "range" },
                                          { label: "Valid", value: "valid" },
                                          { label: "Options", value: "options" },
                                          { label: "Complies", value: "complies" },
                                       ]}
                                       onChange={(value: { label: string; value: string }) => {
                                          setType(value.value);
                                       }}
                                       placeholder="Search validation type"
                                    />
                                 )}
                              </Field>
                           </GridColumn>
                           {type === "range" && (
                              <Fragment>
                                 <GridColumn medium={4}>
                                    <Field label="Minimum value" isRequired name="min">
                                       {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                                    </Field>
                                 </GridColumn>
                                 <GridColumn medium={4}>
                                    <Field label="Maximum value" isRequired name="max">
                                       {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                                    </Field>
                                 </GridColumn>
                              </Fragment>
                           )}
                           {type === "valid" && (
                              <Fragment>
                                 <GridColumn medium={4}>
                                    <Field label="Valid result" isRequired name="validResult">
                                       {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                                    </Field>
                                 </GridColumn>
                                 <GridColumn medium={4}>
                                    <Field label="Invalid result" isRequired name="invalidResult">
                                       {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                                    </Field>
                                 </GridColumn>
                              </Fragment>
                           )}
                           {type === "options" && (
                              <Fragment>
                                 <GridColumn medium={8}>
                                    <Field label="Valid result" isRequired name="validResult" defaultValue={optionValue}>
                                       {({ fieldProps }: any) => (
                                          <CreatableSelect
                                             isMulti
                                             isClearable={false}
                                             value={optionValue}
                                             {...fieldProps}
                                             options={createOptions}
                                             onChange={handleChange}
                                             onCreateOption={handleCreate}
                                             placeholder="Search validation type"
                                          />
                                       )}
                                    </Field>
                                 </GridColumn>
                              </Fragment>
                           )}
                        </Grid>

                        <Grid>
                           <GridColumn medium={5}>
                              <Field label="Method" isRequired name="method">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={7}>
                              <Field label="Requirement" isRequired name="requirement">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>

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

export default AddTestMethod;
