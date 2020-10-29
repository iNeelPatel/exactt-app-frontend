import React, { Component } from "react";
import { JobAllotementProps } from "./Types";

export default class JobAllotment extends Component<JobAllotementProps, any> {
   render() {
      return (
         <div>
            <h1>Test print</h1>
            <img
               src="http://exactt-dev.herokuapp.com/api/files/exactt-backend/9ea584fcfe5e72fc379d53af00158f6a_companyLogo.png"
               alt="logo"
            />
            {this.props.details}
         </div>
      );
   }
}
