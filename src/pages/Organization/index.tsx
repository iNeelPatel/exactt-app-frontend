// ====================================== Module imports ======================================
import React, { useState } from "react";
import { ProgressTracker, Stages } from "@atlaskit/progress-tracker";
import Button from "@atlaskit/button";
import { colors, typography } from "@atlaskit/theme";
import Form, { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";

// ====================================== File imports ======================================
import { Box, Heading } from "../../components";
import "./organization.css";
import StatesAndDistricts from "../../constants/states-and-districts.json";

const Organization = () => {
   const [step, setStep] = useState(0);
   const [cityOptions, setCityOptions]: any = useState([]);
   const exactt_logo = require("../../assets/images/exactt_logo.png");

   const statesOption = StatesAndDistricts.states.map((item) => ({ label: item.state, value: item.state }));

   const setCityOption = (state: any): any => {
      var selectedState = StatesAndDistricts.states.find((item) => item.state === state.value);
      var citys = selectedState && selectedState.districts ? selectedState.districts.map((item) => ({ label: item, value: item })) : [];
      setCityOptions(citys);
   };

   const items: Stages = [
      {
         id: "0",
         label: "Basic Details",
         percentageComplete: 0,
         status: "current",
      },
      {
         id: "1",
         label: "Contact Details",
         percentageComplete: 0,
         status: "unvisited",
      },
      {
         id: "2",
         label: "Accounting Details",
         percentageComplete: 0,
         status: "unvisited",
      },
   ];

   const stepItems: Stages = items.map((item) => {
      if (parseInt(item.id) === step) {
         return {
            ...item,
            percentageComplete: 0,
            status: "current",
         };
      } else if (parseInt(item.id) < step) {
         return {
            ...item,
            percentageComplete: 100,
            status: "visited",
         };
      } else {
         return item;
      }
   });

   return (
      <div className="container" style={{ background: colors.N10 }}>
         <div>
            <img src={exactt_logo} className="logo" alt="exactt-logo" />
         </div>

         <Box elevation="e300" style={{ width: 500 }}>
            <Heading mixin={typography.h500} style={{ marginTop: 10 }}>
               Enter your orgnization details
            </Heading>
            <ProgressTracker items={stepItems} animated={true} spacing="cosy" />
            <div style={{ textAlign: "left" }}>
               <Form
                  onSubmit={async (formState: any) => {
                     console.log(formState);
                  }}
               >
                  {({ formProps, submitting, getValues }: any) => {
                     return (
                        <form {...formProps}>
                           <div style={{ display: step === 0 ? "block" : "none" }}>
                              <Field label="Orginazation name" isRequired name="name">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="Prefix" isRequired name="perfix">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </div>

                           <div style={{ display: step === 1 ? "block" : "none" }}>
                              <Field label="Contact Person" isRequired name="contact_peron">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="Phone" isRequired name="phone">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="Address line 1" isRequired name="line1">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="Address line 2" isRequired name="line2">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <div style={{ display: "flex", justifyContent: "space-between" }}>
                                 <div style={{ width: "32%" }}>
                                    <Field label="State" isRequired name="state">
                                       {({ fieldProps }: any) => (
                                          <Select
                                             {...fieldProps}
                                             options={statesOption}
                                             placeholder="Choose a state"
                                             onChange={(value) => setCityOption(value)}
                                             style={{ width: "30%" }}
                                          />
                                       )}
                                    </Field>
                                 </div>
                                 <div style={{ width: "32%" }}>
                                    <Field label="City" isRequired name="city">
                                       {({ fieldProps }: any) => (
                                          <Select
                                             {...fieldProps}
                                             options={cityOptions}
                                             placeholder="Choose a city"
                                             isDisabled={cityOptions.length === 0}
                                          />
                                       )}
                                    </Field>
                                 </div>
                                 <div style={{ width: "32%" }}>
                                    <Field label="Zip" isRequired name="zip">
                                       {({ fieldProps }: any) => <Textfield {...fieldProps} maxLength={6} type="number" />}
                                    </Field>
                                 </div>
                              </div>
                           </div>

                           <div style={{ display: step === 2 ? "block" : "none" }}>
                              <Field label="Bank account name" name="bank_name">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="Branch" name="branch">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="Account number" name="acc_no">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="IFSC Code" name="ifsc">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>

                              <Field label="GST Number" name="gst">
                                 {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                              </Field>
                           </div>

                           <div style={{ display: "flex", flex: 1, flexDirection: "row", justifyContent: "flex-end", marginTop: 30 }}>
                              <Button
                                 appearance="link"
                                 onClick={() => {
                                    if (step !== 0) {
                                       setStep(step - 1);
                                    }
                                 }}
                              >
                                 Back
                              </Button>

                              {step === 2 ? (
                                 <Button appearance="primary" type="submit">
                                    Submit
                                 </Button>
                              ) : (
                                 <Button appearance="primary" onClick={() => setStep(step + 1)} isLoading={submitting}>
                                    Next
                                 </Button>
                              )}
                           </div>
                        </form>
                     );
                  }}
               </Form>
            </div>
         </Box>
      </div>
   );
};

export default Organization;
