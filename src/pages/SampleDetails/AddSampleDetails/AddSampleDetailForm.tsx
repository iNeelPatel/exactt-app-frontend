// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import Form, { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select, { OptionProps } from "@atlaskit/select";
import Button from "@atlaskit/button";

// ====================================== File imports ======================================
import { AddSampleDetailFormProps } from "./types";
import { SampleGroup } from "../../../redux/types/SampleGroupTypes";

const AddSampleGroup = (props: AddSampleDetailFormProps) => {
   const { onSearchSampleGorup, searchedSampleGroup, edit, editData } = props;
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const [searchKeyword, setSearchKeyword] = useState("");
   const [sampleGroupsOptions, setSampleGroupsOptions] = useState<any>([]);
   const [optionLoading, setOptionLoading] = useState(false);
   const [selectedSampleGroups, setSelectedSampleGroups] = useState<any>([]);

   const search = async () => {
      setOptionLoading(true);
      await onSearchSampleGorup(searchKeyword);
      setOptionLoading(false);
   };

   useEffect(() => {
      search();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchKeyword]);

   useEffect(() => {
      let sampleGroupsOptions: any = searchedSampleGroup?.map((sampleGroup: SampleGroup) => ({
         label: sampleGroup.name,
         value: sampleGroup.objectId,
      }));
      setSampleGroupsOptions(sampleGroupsOptions);
   }, [searchedSampleGroup]);

   useEffect(() => {
      if (edit) {
         let selectedSampleGroups = editData?.sampleGroups.map((sampleGroup: SampleGroup) => ({
            label: sampleGroup.name,
            value: sampleGroup.objectId,
         }));
         setSelectedSampleGroups(selectedSampleGroups);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [edit]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (data: any) => {
                     let sampleGroups = selectedSampleGroups.map((item: any) => item.value);
                     try {
                        await props.onSubmit({ ...data, sampleGroups });
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
                              <Field label="Name" isRequired name="name" defaultValue={edit && editData ? editData.name : ""}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>

                           <GridColumn medium={6}>
                              <Field
                                 label="Generic Name"
                                 isRequired
                                 name="genericName"
                                 defaultValue={edit && editData ? editData.genericName : ""}
                              >
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Sample Group" isRequired name="sampleGroups">
                           {({ fieldProps }: any) => (
                              <Select
                                 isSearchable
                                 isMulti
                                 {...fieldProps}
                                 options={sampleGroupsOptions}
                                 onInputChange={(keyword) => {
                                    setSearchKeyword(keyword);
                                 }}
                                 isLoading={optionLoading}
                                 placeholder="Search Sample Group"
                                 menuIsOpen={dropdownOpen}
                                 onMenuOpen={() => setDropdownOpen(true)}
                                 onBlur={() => setDropdownOpen(false)}
                                 onChange={(values: OptionProps) => setSelectedSampleGroups(values)}
                                 value={selectedSampleGroups}
                              />
                           )}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              {edit ? "Edit sample details" : "Add sample details"}
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
