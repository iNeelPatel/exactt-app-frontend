// ====================================== Module imports ======================================
import React from "react";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AppState from "../redux/types";

interface Props {
   user: any;
}

const Navigation = (props: Props) => {
   const { user } = props;
   return user && !user.error ? <AuthenticatedRoute /> : <UnauthenticatedRoute />;
};

const mapStateToProps = (state: AppState) => ({
   user: state.user.user,
});

export default connect(mapStateToProps)(Navigation);
