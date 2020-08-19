// ====================================== Module imports ======================================
import React, { useState } from "react";
import { ProgressTracker, Stages } from "@atlaskit/progress-tracker";
import Button from "@atlaskit/button";
import { colors, typography } from "@atlaskit/theme";
import Form, { Field } from "@atlaskit/form";
import Textfield from "@atlaskit/textfield";
import Select from "@atlaskit/select";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Parse from "parse";

// ====================================== File imports ======================================
import { Box, Heading } from "../../components";
import "./organization.css";
import StatesAndDistricts from "../../constants/states-and-districts.json";
import { Props } from "./types";
import AppState from "../../redux/types";
import { setOrganization } from "../../redux/actions/OrganizationActions";
import { getStatus } from "../../redux/actions/AuthActions";

const OrganizationComponenet = (props: Props) => {
   var defaultState = StatesAndDistricts.states.find((item) => item.state === "Andhra Pradesh");
   var defaultCity = defaultState ? defaultState.districts.map((item) => ({ label: item, value: item })) : [];
   const [step, setStep] = useState(0);
   const [logo, setLogo] = useState<any>();
   const [renderImg, setRenderImg] = useState<any>();
   const [cityOptions, setCityOptions]: any = useState(defaultCity);
   const exactt_logo = require("../../assets/images/exactt_logo.png");
   const empty_image = require("../../assets/images/image.png");

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
      } else if (step < 3 && parseInt(item.id) < step) {
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
      <div className="org_container" style={{ background: colors.N10 }}>
         <div>
            <img src={exactt_logo} className="exactt-logo-org" alt="exactt-logo-org" />
         </div>

         <Box elevation="e300" style={{ width: 500 }}>
            <Heading mixin={typography.h500} style={{ marginTop: 10 }}>
               Enter your orgnization details
            </Heading>
            <ProgressTracker items={stepItems} animated={true} spacing="cosy" />
            <div style={{ textAlign: "left" }}>
               <Form
                  onSubmit={async (formState: any) => {
                     // setStep(step - 1);

                     var parseLogo = new Parse.File("companyLogo.png", logo, "image/png");
                     var logoFile = await parseLogo.save();

                     let formData: any = {
                        prefix: formState.prefix,
                        gst: formState.gst,
                        name: formState.name,
                        contact: {
                           name: formState.contact_peron,
                           phone: formState.phone,
                           email: formState.email,
                        },
                        logo: logoFile,
                        email: formState.email,
                        address: {
                           line1: formState.line1,
                           line2: formState.line2,
                           state: formState.state.value,
                           city: formState.city.value,
                           zip: formState.zip,
                        },
                        bank: {
                           name: formState.bank_name,
                           acc_name: formState.acc_name,
                           acc_no: formState.acc_no,
                           branch: formState.branch,
                           ifsc: formState.ifsc,
                        },
                     };
                     console.log(formData);
                     try {
                        let res = await props.setOrganization(formData);
                        console.log(res);
                        let status = await props.getStatus();
                        console.log(status);
                     } catch (error) {
                        console.log(error);
                     }
                  }}
               >
                  {({ formProps, submitting }: any) => {
                     return (
                        <form {...formProps}>
                           <Field label="Orginazation name" isRequired name="name">
                              {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                           </Field>

                           <Field label="Prefix" isRequired name="prefix">
                              {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                           </Field>

                           <Dropzone
                              onDrop={async (acceptedFiles) => {
                                 setLogo(acceptedFiles[0]);
                                 var imgreader = new FileReader();
                                 await imgreader.readAsDataURL(acceptedFiles[0]);
                                 setRenderImg(imgreader);
                              }}
                           >
                              {({ getRootProps, getInputProps }) => (
                                 <section>
                                    <div
                                       {...getRootProps()}
                                       className="logoSelection"
                                       style={{
                                          borderColor: colors.N40,
                                          display: "flex",
                                          alignItems: "center",
                                          flexDirection: "column",
                                       }}
                                    >
                                       <input {...getInputProps()} />
                                       <img
                                          src={logo && renderImg ? renderImg.result : empty_image}
                                          style={{ width: logo ? 200 : 100 }}
                                          alt="empty_image"
                                       />
                                       <Button appearance="primary">Select Logo</Button>
                                    </div>
                                 </section>
                              )}
                           </Dropzone>

                           <Field label="Contact Person" isRequired name="contact_peron">
                              {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                           </Field>

                           <Field label="Phone" isRequired name="phone">
                              {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                           </Field>

                           <Field label="Email" isRequired name="email">
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
                                 <Field
                                    label="State"
                                    isRequired
                                    name="state"
                                    defaultValue={{ label: "Andhra Pradesh", value: "Andhra Pradesh" }}
                                 >
                                    {({ fieldProps }: any) => (
                                       <Select
                                          {...fieldProps}
                                          options={statesOption}
                                          placeholder="Choose a state"
                                          onChange={(value) => {
                                             fieldProps.onChange();
                                             setCityOption(value);
                                          }}
                                          style={{ width: "30%" }}
                                       />
                                    )}
                                 </Field>
                              </div>
                              <div style={{ width: "32%" }}>
                                 <Field label="City" isRequired name="city" defaultValue={{ label: "Anantapur", value: "Anantapur" }}>
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

                           <Field label="Bank account name" name="bank_name">
                              {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                           </Field>

                           <Field label="Account name" name="acc_name">
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

                              <Button appearance="primary" type="submit" isLoading={submitting}>
                                 Submit
                              </Button>
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

const mapStateToProps = (state: AppState) => ({
   orgnization: state.orgnizationReducer,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ setOrganization, getStatus }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrganizationComponenet);
