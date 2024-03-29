// ====================================== Module imports ======================================
import React, { useState, Fragment, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, HelperMessage } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select, { OptionType } from "@atlaskit/select";
import Button from "@atlaskit/button";
import { Checkbox } from "@atlaskit/checkbox";

// ====================================== File imports ======================================
import { AddTestMethodFormProps } from "./types";
import { Divider } from "../../../components";
import { Parameter } from "../../../redux/types/ParameterTypes";

const AddTestMethod = (props: AddTestMethodFormProps) => {
   const { searchedParameters, onSearchParameter, edit, editData } = props;
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [searchKeyword, setSearchKeyword] = useState("");
   const [parameterOptions, setParameterOptions] = useState<any>([]);
   const [selectedParameters, setSelectedParameters] = useState<any>([]);

   useEffect(() => {
      onSearchParameter(searchKeyword);
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchKeyword]);

   useEffect(() => {
      if (edit) {
         const parameters = editData.parameters.map((parameter: any) => ({
            ...parameter,
            ...parameter.parameter,
            label: parameter.parameter.name,
            value: parameter.objectId,
         }));
         setSelectedParameters(parameters);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [edit]);

   useEffect(() => {
      let parametersOption: any = searchedParameters.map((parameter: Parameter) => ({
         ...parameter,
         nabl: false,
         label: parameter.name,
         value: parameter.objectId,
      }));
      setParameterOptions(parametersOption);
   }, [searchedParameters]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     let formData = {
                        name: data.name,
                        parameters: selectedParameters.map((parameter: any) => ({
                           parameter: parameter.objectId,
                           condition_type: parameter.condition_type,
                           validation: parameter.validation,
                           method: parameter.method,
                           nabl: parameter.nabl,
                           requirement: parameter.requirement,
                        })),
                     };

                     try {
                        await props.onSubmit(formData);
                        props.onBack();
                     } catch (err) {
                        console.log(err);
                     }
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field label="Name" isRequired name="name" defaultValue={edit && editData ? editData.name : ""}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Parameter" isRequired name="parameter">
                           {({ fieldProps }: any) => (
                              <Select
                                 isSearchable
                                 isMulti
                                 {...fieldProps}
                                 options={parameterOptions}
                                 onInputChange={(keyword) => setSearchKeyword(keyword)}
                                 isLoading={false}
                                 onChange={(options: OptionType) => {
                                    setSelectedParameters(options);
                                 }}
                                 menuIsOpen={dropdownOpen}
                                 onMenuOpen={() => setDropdownOpen(true)}
                                 placeholder="Search parameter"
                                 onBlur={() => setDropdownOpen(false)}
                                 value={selectedParameters}
                              />
                           )}
                        </Field>

                        {selectedParameters?.map((item: any, idx: number) => (
                           <React.Fragment>
                              <Divider />
                              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, alignItems: "center" }}>
                                 <h4>{`${idx + 1}. ${item.name}`}</h4>
                                 <div style={{ display: "flex", alignItems: "center" }}>
                                    <span>
                                       <Checkbox
                                          label="NABL Type"
                                          onChange={() => {
                                             let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                parameter.objectId === item.objectId ? { ...parameter, nabl: !item.nabl } : parameter
                                             );
                                             setSelectedParameters(updateSelectedParameters);
                                          }}
                                          name={`nabl-type-${item.objectId}`}
                                          isChecked={item.nabl}
                                       />
                                    </span>
                                 </div>
                              </div>

                              <Grid>
                                 <GridColumn medium={item.condition_type ? (item.condition_type === "complies" ? 12 : 4) : 12}>
                                    <Field label="Validation type" isRequired name={`type${idx}`}>
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
                                                let validation: any;
                                                if (value.value === "range") {
                                                   validation = { min: undefined, max: undefined };
                                                } else if (value.value === "valid") {
                                                   validation = { validResult: undefined, invalidResult: undefined };
                                                } else if (value.value === "options") {
                                                   validation = { validOptions: undefined, invalidOptions: undefined };
                                                } else if (value.value === "complies") {
                                                   validation = {};
                                                }
                                                let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                   parameter.objectId === item.objectId
                                                      ? { ...parameter, condition_type: value.value, validation }
                                                      : parameter
                                                );
                                                setSelectedParameters(updateSelectedParameters);
                                             }}
                                             placeholder="Search validation type"
                                             value={{ value: item.condition_type, label: item.condition_type }}
                                          />
                                       )}
                                    </Field>
                                 </GridColumn>
                                 {item.condition_type === "range" && (
                                    <Fragment>
                                       <GridColumn medium={4}>
                                          <Field label="Minimum value" isRequired name={`min${idx}`}>
                                             {({ fieldProps }: any) => (
                                                <Fragment>
                                                   <Textfield
                                                      type="number"
                                                      {...fieldProps}
                                                      onChange={(e: any) => {
                                                         let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                            parameter.objectId === item.objectId
                                                               ? { ...parameter, validation: { ...item.validation, min: e.target.value } }
                                                               : parameter
                                                         );
                                                         setSelectedParameters(updateSelectedParameters);
                                                      }}
                                                      value={item.validation.min}
                                                   />
                                                </Fragment>
                                             )}
                                          </Field>
                                       </GridColumn>
                                       <GridColumn medium={4}>
                                          <Field label="Maximum value" isRequired name={`max${idx}`}>
                                             {({ fieldProps }: any) => (
                                                <Textfield
                                                   type="number"
                                                   {...fieldProps}
                                                   onChange={(e: any) => {
                                                      let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                         parameter.objectId === item.objectId
                                                            ? { ...parameter, validation: { ...item.validation, max: e.target.value } }
                                                            : parameter
                                                      );
                                                      setSelectedParameters(updateSelectedParameters);
                                                   }}
                                                   value={item.validation.max}
                                                />
                                             )}
                                          </Field>
                                       </GridColumn>
                                    </Fragment>
                                 )}
                                 {item.condition_type === "valid" && (
                                    <Fragment>
                                       <GridColumn medium={4}>
                                          <Field label="Valid result" isRequired name={`validResult${idx}`}>
                                             {({ fieldProps }: any) => (
                                                <Textfield
                                                   {...fieldProps}
                                                   onChange={(e: any) => {
                                                      let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                         parameter.objectId === item.objectId
                                                            ? {
                                                                 ...parameter,
                                                                 validation: { ...item.validation, validResult: e.target.value },
                                                              }
                                                            : parameter
                                                      );
                                                      setSelectedParameters(updateSelectedParameters);
                                                   }}
                                                   value={item.validation.validResult}
                                                />
                                             )}
                                          </Field>
                                       </GridColumn>
                                       <GridColumn medium={4}>
                                          <Field label="Invalid result" isRequired name={`invalidResult${idx}`}>
                                             {({ fieldProps }: any) => (
                                                <Textfield
                                                   {...fieldProps}
                                                   onChange={(e: any) => {
                                                      let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                         parameter.objectId === item.objectId
                                                            ? {
                                                                 ...parameter,
                                                                 validation: { ...item.validation, invalidResult: e.target.value },
                                                              }
                                                            : parameter
                                                      );
                                                      setSelectedParameters(updateSelectedParameters);
                                                   }}
                                                   value={item.validation.invalidResult}
                                                />
                                             )}
                                          </Field>
                                       </GridColumn>
                                    </Fragment>
                                 )}
                                 {item.condition_type === "options" && (
                                    <Fragment>
                                       <Fragment>
                                          <GridColumn medium={4}>
                                             <Field label="Valid options" isRequired name={`validOption${idx}`}>
                                                {({ fieldProps }: any) => (
                                                   <Textfield
                                                      {...fieldProps}
                                                      onChange={(e: any) => {
                                                         let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                            parameter.objectId === item.objectId
                                                               ? {
                                                                    ...parameter,
                                                                    validation: { ...item.validation, validOptions: e.target.value },
                                                                 }
                                                               : parameter
                                                         );
                                                         setSelectedParameters(updateSelectedParameters);
                                                      }}
                                                      value={item.validation.validOptions}
                                                   />
                                                )}
                                             </Field>
                                          </GridColumn>
                                          <GridColumn medium={4}>
                                             <Field label="Invalid options" isRequired name={`invalidOption${idx}`}>
                                                {({ fieldProps }: any) => (
                                                   <Textfield
                                                      {...fieldProps}
                                                      onChange={(e: any) => {
                                                         let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                            parameter.objectId === item.objectId
                                                               ? {
                                                                    ...parameter,
                                                                    validation: { ...item.validation, invalidOptions: e.target.value },
                                                                 }
                                                               : parameter
                                                         );
                                                         setSelectedParameters(updateSelectedParameters);
                                                      }}
                                                      value={item.validation.invalidOptions}
                                                   />
                                                )}
                                             </Field>
                                          </GridColumn>
                                          <GridColumn medium={4} />
                                          <GridColumn medium={4}>
                                             <HelperMessage>Separate your options by comma (,)</HelperMessage>
                                          </GridColumn>
                                       </Fragment>
                                    </Fragment>
                                 )}
                              </Grid>

                              <Grid>
                                 <GridColumn medium={5}>
                                    <Field label="Method" isRequired name="method" defaultValue={item.method}>
                                       {({ fieldProps }: any) => (
                                          <Textfield
                                             {...fieldProps}
                                             onChange={(e: any) => {
                                                let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                   parameter.objectId === item.objectId
                                                      ? { ...parameter, method: e.target.value }
                                                      : parameter
                                                );
                                                setSelectedParameters(updateSelectedParameters);
                                             }}
                                             value={item.method}
                                          />
                                       )}
                                    </Field>
                                 </GridColumn>
                                 <GridColumn medium={7}>
                                    <Field label="Requirement" isRequired name="requirement">
                                       {({ fieldProps }: any) => (
                                          <Textfield
                                             {...fieldProps}
                                             onChange={(e: any) => {
                                                let updateSelectedParameters = selectedParameters.map((parameter: any) =>
                                                   parameter.objectId === item.objectId
                                                      ? { ...parameter, requirement: e.target.value }
                                                      : parameter
                                                );
                                                setSelectedParameters(updateSelectedParameters);
                                             }}
                                             value={item.requirement}
                                          />
                                       )}
                                    </Field>
                                 </GridColumn>
                              </Grid>
                           </React.Fragment>
                        ))}

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              {edit ? "Edit test method" : "Add test method"}
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
