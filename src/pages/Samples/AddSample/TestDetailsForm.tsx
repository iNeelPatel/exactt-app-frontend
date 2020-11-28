// ====================================== Module imports ======================================
import React, { Fragment, useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Button from "@atlaskit/button";
import TextField from "@atlaskit/textfield";
import Select, { OptionType } from "@atlaskit/select";
import { Checkbox } from "@atlaskit/checkbox";

// ====================================== File imports ======================================
import { TestDetailsFormProps } from "./types";
import { Parameter } from "../../../redux/types/ParameterTypes";
import { SampleGroup } from "../../../redux/types/SampleGroupTypes";

const TestDetailsForm = (props: TestDetailsFormProps) => {
   const {
      hodOptions,
      searchedParameters,
      searchedSampleGroup,
      onSearchParameters,
      onSearchSampleGroup,
      sampleDetails,
      isNewSample,
   } = props;
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [parameterSearchKeyword, setParameterSearchKeyword] = useState("");
   const [parameterSearchLoading, setParameterSearchLoading] = useState(false);
   const [parameterOptions, setParameterOptions] = useState<any>([]);
   const [sampleGroupSearchKeyword, setSampleGroupSearchKeyword] = useState("");
   const [sampleGroupSearchLoading, setSampleGroupSearchLoading] = useState(false);
   const [sampleGroupOptions, setSampleGroupOptions] = useState<any>([]);
   const [parameterSearchable, setParameterSearchable] = useState(true);
   const [includeAllParameters, setIncludeAllParameters] = useState<any>(false);
   const [selectedParameters, setSelectedParameters] = useState<any>([]);

   const sampleGroupSearch = async () => {
      setSampleGroupSearchLoading(true);
      await onSearchSampleGroup(sampleGroupSearchKeyword);
      setSampleGroupSearchLoading(false);
   };

   const parameterSearch = async () => {
      setParameterSearchLoading(true);
      await onSearchParameters(parameterSearchKeyword);
      setParameterSearchLoading(false);
   };

   useEffect(() => {
      if (parameterSearchable) {
         parameterSearch();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [parameterSearchKeyword]);

   useEffect(() => {
      let parameterOptions: any = searchedParameters?.map((parameter: Parameter) => ({
         ...parameter,
         label: parameter.name,
         value: parameter.objectId,
      }));
      setParameterOptions(parameterOptions);
   }, [searchedParameters]);

   useEffect(() => {
      if (isNewSample === true) {
         sampleGroupSearch();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [sampleGroupSearchKeyword]);

   useEffect(() => {
      let sampleGroupOptions: any = searchedSampleGroup?.map((sampleGroup: SampleGroup) => ({
         ...sampleGroup,
         label: sampleGroup.name,
         value: sampleGroup.objectId,
      }));
      setSampleGroupOptions(sampleGroupOptions);
   }, [searchedSampleGroup]);

   useEffect(() => {
      if (includeAllParameters) {
         setSelectedParameters(parameterOptions);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [includeAllParameters]);

   useEffect(() => {
      if (isNewSample === false) {
         let sampleGroupOptions = sampleDetails?.sampleGroups?.map((sampleGroup: any) => ({
            ...sampleGroup,
            label: sampleGroup.name,
            parameters: sampleGroup.parameters.map((parameter: any) => ({
               ...parameter,
               parameter: parameter?.parameter?.toJSON(),
            })),
            value: sampleGroup.objectId,
         }));

         setSampleGroupOptions(sampleGroupOptions);
      }
   }, [isNewSample, sampleDetails]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     let parameters: any = selectedParameters.map((parameter: any): any => ({
                        ...parameter,
                        sampleGroup: parameter?.sampleGroup?.toJSON(),
                        parameter: parameter?.parameter?.objectId,
                        department: parameter?.parameter?.department?.objectId,
                     }));
                     await props.onSubmit({ ...data, parameters });
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps} noValidate={true}>
                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="Sampling method"
                                 isRequired
                                 name="samplingMethod"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "SAMPLING_METHOD_REQUIRED";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <TextField {...fieldProps} />
                                       {error === "SAMPLING_METHOD_REQUIRED" && <ErrorMessage>Sampling method is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={8}>
                              <Field
                                 label="Test group"
                                 isRequired
                                 name="testGroup"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "TEST_GROUP_REQUIRED";
                                    }
                                    if (value?.value === "N/A") {
                                       setParameterSearchable(true);
                                    } else {
                                       setParameterSearchable(false);
                                       let parameterOptions = value?.parameters.map((parameter: any) => ({
                                          ...parameter,
                                          name: parameter?.parameter?.name,
                                          label: parameter?.parameter?.name,
                                          value: parameter?.objectId,
                                       }));
                                       setParameterOptions(parameterOptions);
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <Select
                                          {...fieldProps}
                                          validationState={error === "SAMPLING_METHOD_REQUIRED" && "error"}
                                          options={
                                             sampleGroupOptions?.length > 0
                                                ? [{ label: "N/A", value: "N/A" }, ...sampleGroupOptions]
                                                : [{ label: "N/A", value: "N/A" }]
                                          }
                                          placeholder="Select test group"
                                          onInputChange={(value) => setSampleGroupSearchKeyword(value)}
                                          isLoading={sampleGroupSearchLoading}
                                       />
                                       {error === "TEST_GROUP_REQUIRED" && <ErrorMessage>Test group is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Parameters" isRequired name="parameters">
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Select
                                    isMulti
                                    {...fieldProps}
                                    validationState={error === "PARAMETERS_REQUIRED" && "error"}
                                    options={parameterOptions}
                                    placeholder="Select test group"
                                    menuIsOpen={dropdownOpen}
                                    onMenuOpen={() => setDropdownOpen(true)}
                                    onBlur={() => setDropdownOpen(false)}
                                    isLoading={parameterSearchLoading}
                                    onInputChange={(value: string) => setParameterSearchKeyword(value)}
                                    onChange={(selectedOptions: OptionType) => {
                                       setSelectedParameters(selectedOptions);
                                    }}
                                    isDisabled={includeAllParameters}
                                    value={selectedParameters}
                                 />
                                 <Checkbox
                                    value={includeAllParameters}
                                    label="Add all parameters"
                                    onChange={() => {
                                       setIncludeAllParameters(!includeAllParameters);
                                    }}
                                    defaultChecked={false}
                                    name="all-parameters"
                                 />
                                 {error === "PARAMETERS_REQUIRED" && <ErrorMessage>Test group is required.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>

                        <Grid>
                           <GridColumn medium={6}>
                              <Field label="Instructions" name="instructions">
                                 {({ fieldProps }: any) => <TextField {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field label="HOD" name="hod">
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <Select
                                          {...fieldProps}
                                          validationState={error === "HOD_REQUIRED" && "error"}
                                          options={hodOptions}
                                          placeholder="Select hod"
                                       />
                                       {error === "PARAMETERS_REQUIRED" && <ErrorMessage>HOD is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, marginBottom: 100 }}>
                           <Button appearance="link" onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Submit
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

export default TestDetailsForm;
