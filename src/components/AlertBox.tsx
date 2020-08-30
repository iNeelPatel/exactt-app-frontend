// ====================================== Module imports ======================================
import React from "react";
import SectionMessage from "@atlaskit/section-message";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import Box from "./Box";
import AppState from "../redux/types";
import { AlertBoxState } from "../redux/types/AlertBoxTypes";

interface Props extends AlertBoxState {}

const AlertBox = (props: Props) => {
   return props.visible ? (
      <Box elevation="e400" style={{ position: "fixed", maxWidth: 400, zIndex: 1000, padding: 0, alignSelf: "center" }}>
         <SectionMessage appearance={props.appearance}>
            <p>{props.body}</p>
         </SectionMessage>
      </Box>
   ) : null;
};

const mapStateToProps = (state: AppState) => ({
   visible: state.alertBox.visible,
   title: state.alertBox.title,
   appearance: state.alertBox.appearance,
   actions: state.alertBox.actions,
   body: state.alertBox.body,
});

export default connect(mapStateToProps)(AlertBox);
