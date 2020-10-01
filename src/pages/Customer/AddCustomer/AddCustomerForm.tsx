// ====================================== Module imports ======================================
import React, { Fragment, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";

// ====================================== File imports ======================================
import PhoneCodeList from "../../../constants/phone-code.json";
import StatesAndDistricts from "../../../constants/states-and-districts.json";
import { AddCustomerProps } from "./types";

const AddCustomerForm = (props: AddCustomerProps) => {
   const { customer, edit } = props;
   console.log(customer);

   var defaultState = StatesAndDistricts.states.find((item) => item.state === "Andhra Pradesh");
   var defaultCity = defaultState ? defaultState.districts.map((item) => ({ label: item, value: item })) : [];
   const [cityOptions, setCityOptions]: any = useState(defaultCity);

   const statesOption = StatesAndDistricts.states.map((item) => ({ label: item.state, value: item.state }));

   const setCityOption = (state: any): any => {
      var selectedState = StatesAndDistricts.states.find((item) => item.state === state.value);
      var citys = selectedState && selectedState.districts ? selectedState.districts.map((item) => ({ label: item, value: item })) : [];
      setCityOptions(citys);
   };

   const phoneCode = edit ? customer?.contact?.phone?.split("+")[1]?.split("-")?.[0] : undefined;
   const phoneNo = edit ? customer?.contact?.phone?.split("+")[1]?.split("-")?.[1] : undefined;
   const phoneCodeOption = edit ? PhoneCodeList.find((item) => item.value.toString() === phoneCode) : undefined;

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Form
                  onSubmit={async (userData: any) => {
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
                        <Field label="Customer name" isRequired name="name" defaultValue={edit ? customer?.name : undefined}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field
                           label="Contact person name"
                           isRequired
                           name="personName"
                           defaultValue={edit ? customer?.contact?.name : undefined}
                        >
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field
                           label="Email"
                           isRequired
                           name="email"
                           defaultValue={edit ? customer?.contact?.email : undefined}
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
                                 defaultValue={edit ? phoneCodeOption : { label: "+91 India", value: 91 }}
                              >
                                 {({ fieldProps }: any) => <Select {...fieldProps} options={PhoneCodeList} placeholder="Country code" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={9}>
                              <Field label="Phone" isRequired name="phone" defaultValue={phoneNo}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} maxLength={10} />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Address line 1" isRequired name="line1" defaultValue={edit ? customer?.address?.line1 : undefined}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Address line 2" isRequired name="line2" defaultValue={edit ? customer?.address?.line2 : undefined}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field
                                 label="State"
                                 isRequired
                                 name="state"
                                 defaultValue={customer ? { label: customer?.address?.state, value: customer?.address?.state } : undefined}
                                 validate={(value: any) => setCityOption(value)}
                              >
                                 {({ fieldProps }: any) => <Select {...fieldProps} options={statesOption} placeholder="Select state" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field
                                 label="City"
                                 isRequired
                                 name="city"
                                 defaultValue={edit ? { label: customer?.address?.city, value: customer?.address?.city } : undefined}
                              >
                                 {({ fieldProps }: any) => <Select {...fieldProps} options={cityOptions} placeholder="Select city" />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Zip Code" isRequired name="zip" defaultValue={edit ? customer?.address?.zip : undefined}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Grid>
                           <GridColumn medium={4}>
                              <Field label="Bank name" name="bankname" defaultValue={edit ? customer?.bank?.name : undefined}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="Branch" name="branch" defaultValue={edit ? customer?.bank?.branch : undefined}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                           <GridColumn medium={4}>
                              <Field label="IFSC Code" name="ifsc" defaultValue={edit ? customer?.bank?.ifsc : undefined}>
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </GridColumn>
                        </Grid>

                        <Field label="Account name" name="acc_name" defaultValue={edit ? customer?.bank?.acc_name : undefined}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field label="Account Number" name="acc_number" defaultValue={edit ? customer?.bank?.acc_number : undefined}>
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>

                        <Field
                           label="GST Number"
                           name="gst"
                           validate={(value) => {
                              if (!value) {
                                 return;
                              }

                              var gst_format = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;

                              if (!value.match(gst_format)) {
                                 return "INVALID_GST";
                              }
                           }}
                           defaultValue="24ABCDE1234F2ZF"
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                                 {error === "INVALID_GST" && <ErrorMessage>Please enter valid GST number.</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>

                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 20, marginBottom: 20 }}>
                           <Button appearance="link" disabled={submitting} onClick={() => props.onBack()}>
                              Back
                           </Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              {edit ? "Edit customer" : "Add customer"}
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

export default AddCustomerForm;
