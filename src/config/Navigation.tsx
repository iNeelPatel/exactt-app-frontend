// ====================================== Module imports ======================================
import React from "react";
import { connect } from "react-redux";
import Parse from "parse";

// ====================================== File imports ======================================
import AuthenticatedRoute from "./AuthenticatedRoute";
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Connection from "../pages/Connection";
import AppState from "../redux/types";

interface Props {
   user: any;
}

const organizationId: any = localStorage.getItem("organizationId");
const key: any = localStorage.getItem("key");
const url: any = localStorage.getItem("url");

const softwareOnboarding = organizationId && key && url;

if (softwareOnboarding) {
   Parse.initialize(organizationId, key, key);
   Parse.serverURL = url;
}

const Navigation = (props: Props) => {
   const { user } = props;
   return softwareOnboarding ? user && !user.error ? <AuthenticatedRoute /> : <UnauthenticatedRoute /> : <Connection />;
};

const mapStateToProps = (state: AppState) => ({
   user: state.user.user,
});

export default connect(mapStateToProps)(Navigation);
