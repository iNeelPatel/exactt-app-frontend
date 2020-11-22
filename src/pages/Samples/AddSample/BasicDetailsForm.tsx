// ====================================== Module imports ======================================
import React, { Fragment, useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Select from "@atlaskit/select";
import { DatePicker } from "@atlaskit/datetime-picker";
import Button from "@atlaskit/button";
import moment from "moment";

// ====================================== File imports ======================================
import { BasicDetailsFormProps } from "./types";
import { Customer } from "../../../redux/types/CustomerTypes";
import { TestGroup } from "../../../redux/types/TestGroupsTypes";

const BasicDetailsForm = (props: BasicDetailsFormProps) => {
   const { onSearchCustomers, searchedCustomers, searchedTestGroups, onSearchTestGroups, edit, editData } = props;
   const [customerSearchKeyword, setCustomerSearchKeyword] = useState("");
   const [customerSearchLoading, setCustomerSearchLoading] = useState(false);
   const [customerOptions, setCustomerOptions] = useState<any>([]);
   const [testGroupSearchKeyword, setTestGroupSearchKeyword] = useState("");
   const [testGroupSearchLoading, setTestGroupSearchLoading] = useState(false);
   const [testGroupOptions, setTestGroupOptions] = useState<any>([]);

   const customerSearch = async () => {
      setCustomerSearchLoading(true);
      await onSearchCustomers(customerSearchKeyword);
      setCustomerSearchLoading(false);
   };

   const testGroupSearch = async () => {
      setTestGroupSearchLoading(true);
      await onSearchTestGroups(customerSearchKeyword);
      setTestGroupSearchLoading(false);
   };

   useEffect(() => {
      customerSearch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [customerSearchKeyword]);

   useEffect(() => {
      let customerOptions: any = searchedCustomers?.map((customer: Customer) => ({
         ...customer,
         label: customer.name,
         value: customer.objectId,
      }));
      setCustomerOptions(customerOptions);
   }, [searchedCustomers]);

   useEffect(() => {
      testGroupSearch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [testGroupSearchKeyword]);

   useEffect(() => {
      let testGroupOptions: any = searchedTestGroups?.map((testGroup: TestGroup) => ({
         label: `${testGroup.name} (${testGroup.code})`,
         value: testGroup.objectId,
      }));
      setTestGroupOptions(testGroupOptions);
   }, [searchedTestGroups]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn>
               <Form
                  onSubmit={async (data: any) => {
                     props.onSubmit(data);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field
                           isDisabled={edit}
                           label="Customer"
                           isRequired
                           name="customer"
                           validate={(value: any) => {
                              if (!value) {
                                 return "CUSTOMER_REQUIRED";
                              }
                           }}
                           defaultValue={edit ? editData?.customer : undefined}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Select
                                    {...fieldProps}
                                    validationState={error === "CUSTOMER_REQUIRED" && "error"}
                                    options={customerOptions}
                                    isLoading={customerSearchLoading}
                                    placeholder="Select customer"
                                    onInputChange={(keyword) => setCustomerSearchKeyword(keyword)}
                                 />
                                 {error === "CUSTOMER_REQUIRED" && <ErrorMessage>Customer is required.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>
                        <Grid>
                           <GridColumn medium={6}>
                              <Field
                                 isDisabled={edit}
                                 label="Test Group"
                                 isRequired
                                 name="testGroup"
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "GROUP_REQUIRED";
                                    }
                                 }}
                                 defaultValue={
                                    edit
                                       ? { ...editData?.test_group, label: editData?.test_group.name, value: editData?.test_group.objectId }
                                       : undefined
                                 }
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <Select
                                          {...fieldProps}
                                          validationState={error === "GROUP_REQUIRED" && "error"}
                                          options={testGroupOptions}
                                          isLoading={testGroupSearchLoading}
                                          placeholder="Select Group"
                                          onInputChange={(keyword) => setTestGroupSearchKeyword(keyword)}
                                       />
                                       {error === "GROUP_REQUIRED" && <ErrorMessage>Test group is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field
                                 label="Date"
                                 isRequired
                                 name="date"
                                 defaultValue={edit ? moment(editData?.date, "YYYY-MM-DD").toDate() : new Date()}
                              >
                                 {({ fieldProps }: any) => <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" isDisabled />}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <Grid>
                           <GridColumn medium={6}>
                              <Field
                                 label="Due date"
                                 isRequired
                                 name="dueDate"
                                 defaultValue={edit ? editData?.due_date : undefined}
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "DATE_REQUIRED";
                                    }
                                    let date = moment(value, "YYYY-MM-DD");
                                    if (date.isBefore(moment().subtract(1, "day"))) {
                                       return "PAST_DATE";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="Select date" />
                                       {error === "PAST_DATE" && <ErrorMessage>Past date is not allow!</ErrorMessage>}
                                       {error === "DATE_REQUIRED" && <ErrorMessage>Lab due date is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={6}>
                              <Field
                                 label="Lab due date"
                                 isRequired
                                 name="labDueDate"
                                 defaultValue={edit ? editData?.lab_due_date : undefined}
                                 validate={(value: any) => {
                                    if (!value) {
                                       return "DATE_REQUIRED";
                                    }
                                    let date = moment(value, "YYYY-MM-DD");
                                    if (date.isBefore(moment().subtract(1, "day"))) {
                                       return "PAST_DATE";
                                    }
                                 }}
                              >
                                 {({ fieldProps, error }: any) => (
                                    <Fragment>
                                       <DatePicker {...fieldProps} dateFormat="DD/MM/YYYY" placeholder="Select date" />
                                       {error === "PAST_DATE" && <ErrorMessage>Past date is not allow!</ErrorMessage>}
                                       {error === "DATE_REQUIRED" && <ErrorMessage>Lab due date is required.</ErrorMessage>}
                                    </Fragment>
                                 )}
                              </Field>
                           </GridColumn>
                        </Grid>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20 }}>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Next
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

export default BasicDetailsForm;
