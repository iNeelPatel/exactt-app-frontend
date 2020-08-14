import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setHome } from '../../actions/HomeActions';
import Button from '@atlaskit/button';
import { colors, typography } from '@atlaskit/theme';
import { fontFamily } from '@atlaskit/theme';
import Form, { Field } from '@atlaskit/form';
import { Box, Heading } from '../../components';
import Textfield from '@atlaskit/textfield';
import './login.css';

function Login(props: any) {
  const exactt_logo = require("../../assets/images/exactt_logo.png")
  return (
    <div className="container" style={{ background: colors.N10 }}>
      <div>
        <img src={exactt_logo} className="logo" alt="exactt-logo" />
      </div>

      <div style={{ fontFamily: fontFamily(), color: colors.N900, marginTop: 20 }}>Your laboratory management tool</div>

      <Box elevation="e300" style={{ textAlign: "left" }}>
        <Heading mixin={typography.h500} style={{ marginTop: 10 }}>Login to your account</Heading>
        <div>
          <Form
            onSubmit={(formState: unknown) =>
              console.log('form submitted', formState)
            }
          >
            {({ formProps }: any) => (
              <form {...formProps}>
                <Field
                  label="Username"
                  isRequired
                  name="username"
                  defaultValue=""
                >
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
                  defaultValue=""
                >
                  {({ fieldProps }: any) => (
                    <Fragment>
                      <Textfield type="password" {...fieldProps} />
                    </Fragment>
                  )}
                </Field>
                <div className="bottom-section">
                  <Button onClick={() => props.setHome("setNew")} appearance="link">
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
    </div >
  );
}

const mapStateToProps = (state: any) => ({
  home: state.home,
});

function mapDispatchToProps(dispatch: any) {
  return {
    ...bindActionCreators({ setHome }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

