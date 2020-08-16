import React, { Fragment } from "react";
import { Props } from "./types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { setHome } from "../../redux/actions/HomeActions";
import Button from "@atlaskit/button";
import { colors, typography } from "@atlaskit/theme";
import { fontFamily } from "@atlaskit/theme";
import Form, { Field } from "@atlaskit/form";
import { Box, Heading } from "../../components";
import Textfield from "@atlaskit/textfield";
import "./login.css";

function Login(props: Props) {
   const exactt_logo = require("../../assets/images/exactt_logo.png");
   console.log(props);
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
               Login to your account
            </Heading>
            <div>
               <Form onSubmit={(formState: any) => console.log("form submitted", formState)}>
                  {({ formProps }: any) => (
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
                        <div className="bottom-section">
                           <Button onClick={() => props.setHome("NEEL PATEL")} appearance="link">
                              Forgot Password ?
                           </Button>
                           <Button type="submit" appearance="primary">
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
}

const mapStateToProps = (state: any) => ({
   home: state.home.home,
   user: state.home.user,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ setHome }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
