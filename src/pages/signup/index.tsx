// ====================================== Module imports ======================================
import React, { Fragment } from "react";
import Textfield from "@atlaskit/textfield";
import { fontFamily } from "@atlaskit/theme";
import Form, { Field, ErrorMessage } from "@atlaskit/form";
import Button from "@atlaskit/button";
import { colors, typography } from "@atlaskit/theme";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { signup } from "../../redux/actions/UserActions";
import { Box, Heading } from "../../components";
import { Props, SignupForm } from "./types";
import AppState from "../../redux/types";
import "./signup.css";

// ====================================== Main Function ======================================
const SignupComponent = (props: Props) => {
   // ====================================== Local Variables ======================================
   const exactt_logo = require("../../assets/images/exactt_logo.png");

   console.log(props.user);

   // ====================================== Component Render ======================================
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

         <Box elevation="e300" style={{ textAlign: "left", width: 500 }}>
            <Heading mixin={typography.h500} style={{ marginTop: 10 }}>
               Signup for admin account
            </Heading>
            <div>
               <Form
                  onSubmit={(formState: SignupForm) => {
                     props.signup(formState);
                     console.log("form submitted", formState);
                  }}
               >
                  {({ formProps, getValues }: any) => (
                     <form {...formProps}>
                        <Field label="Name" isRequired name="name">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field label="Email" isRequired name="email">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field label="Phone" isRequired name="phone">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field label="Username" isRequired name="username">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field
                           label="Password"
                           isRequired
                           name="password"
                           validate={(value?: string) => {
                              if (!value) {
                                 return;
                              }

                              if (value.length < 9) {
                                 return "TOO_SHORT";
                              }
                           }}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Textfield type="password" {...fieldProps} />
                                 {error && <ErrorMessage>{error === "TOO_SHORT" && "Password must be 8 character long!"}</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>
                        <Field
                           label="Confirm Password"
                           isRequired
                           name="confirmPassword"
                           validate={(value?: string) => {
                              if (!value) {
                                 return;
                              }

                              if (getValues().password !== value) {
                                 return "NOT_MATCH";
                              }
                           }}
                        >
                           {({ fieldProps, error }: any) => (
                              <Fragment>
                                 <Textfield type="password" {...fieldProps} />
                                 {error && <ErrorMessage>{error === "NOT_MATCH" && "Password is not match!"}</ErrorMessage>}
                              </Fragment>
                           )}
                        </Field>
                        <div className="bottom-section">
                           <div />
                           <Button type="submit" appearance="primary">
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

const mapStateToProps = (state: AppState) => ({
   user: state.user.user,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ signup }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
