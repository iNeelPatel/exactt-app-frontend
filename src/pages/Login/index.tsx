// ====================================== Module imports ======================================
import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Textfield from "@atlaskit/textfield";
import Form, { Field } from "@atlaskit/form";
import Button from "@atlaskit/button";
import { colors, typography, fontFamily } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { login } from "../../redux/actions/UserActions";
import { Box, Heading } from "../../components";
import { Props, LoginForm } from "./types";
import AppState from "../../redux/types";
import "./login.css";

// ====================================== Component Render ======================================
const LoginComponent = (props: Props) => {
   const [error, setError] = useState("");
   const exactt_logo = require("../../assets/images/exactt_logo.png");
   return (
      <div className="container" style={{ background: colors.N10 }}>
         <div>
            <img src={exactt_logo} className="login-logo" alt="exactt-logo" />
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
               Login to your account
            </Heading>
            <div>
               <Form
                  onSubmit={async (formState: LoginForm) => {
                     let res = await props.login(formState.username, formState.password);
                     setError(res.error.message);
                  }}
               >
                  {({ formProps, submitting }: any) => (
                     <form {...formProps}>
                        <Field label="Username" isRequired name="username" defaultValue="">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        <Field label="Password" isRequired name="password" defaultValue="">
                           {({ fieldProps }: any) => (
                              <Fragment>
                                 <Textfield type="password" {...fieldProps} />
                              </Fragment>
                           )}
                        </Field>
                        {error && <div style={{ color: colors.R400, fontSize: 12, marginTop: 10 }}>Error: {error}</div>}
                        <div className="bottom-section">
                           <Button appearance="link">Forgot Password ?</Button>
                           <Button type="submit" appearance="primary" isLoading={submitting}>
                              Login
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
      ...bindActionCreators({ login }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
