import React from 'react';
import '@atlaskit/css-reset';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setHome } from '../../actions/HomeActions';
import Button from '@atlaskit/button';

function Login(props: any) {
  console.log(props)
  return (
    <div>
      Login Page
      <Button onClick={() => props.setHome("setNew")}>
        Click
      </Button>
    </div>
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

