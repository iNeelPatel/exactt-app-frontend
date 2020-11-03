// ====================================== Module imports ======================================
import React from "react";
import Textfield from "@atlaskit/textfield";
import Form, { Field } from "@atlaskit/form";
import Button from "@atlaskit/button";
import { colors, typography, fontFamily } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Box, Heading } from "../../components";

// ====================================== Component Render ======================================
const Connection = () => {
   const exactt_logo = require("../../assets/images/exactt_logo.png");

   const setLocalStorage = async (data: any) => {
      localStorage.setItem("organizationId", data.organizationId);
      localStorage.setItem("key", data.key);
      localStorage.setItem("url", data.url);
      window.location.reload(false);
   };

   return (
      <div className="container" style={{ background: colors.N10 }}>
         <div>
            <img src={exactt_logo} className="logo" alt="exactt-logo" />
         </div>

         <div
            style={{
               fontFamily: fontFamily(),
               color: colors.N900,
               marginTop: 20,
            }}
         >
            Your laboratory management tool
         </div>

         <Box elevation="e300" style={{ textAlign: "left" }}>
            <Heading mixin={typography.h500} style={{ marginTop: 10 }}>
               Connect to your organization server
            </Heading>
            <div>
               <Form
                  onSubmit={async (formState: any) => {
                     await setLocalStorage(formState);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field label="Organization Id" isRequired name="organizationId" defaultValue="exactt-backend">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>
                        <Field label="Serial key" isRequired name="key" defaultValue="vMvvybc1z4*Q$!J*k4P4NNx">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>
                        <Field label="URL" isRequired name="url" defaultValue="https://exactt-dev.herokuapp.com/api">
                           {({ fieldProps }: any) => <Textfield {...fieldProps} />}
                        </Field>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 10 }}>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Submit
                           </Button>
                        </div>
                     </form>
                  )}
               </Form>
            </div>
         </Box>
      </div>
   );
};

export default Connection;
