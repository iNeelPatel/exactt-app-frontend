import React, { Component } from "react";
import { JobAllotementProps } from "./Types";
import Barcode from "./Barcode";
import PageStyles from "./PageStyles";

export default class JobAllotment extends Component<JobAllotementProps, any> {
   render() {
      const { details, sample } = this.props;

      return (
         <div className="print-container" style={{ margin: "0", padding: "0" }}>
            <div style={PageStyles.header}>
               <div style={{ width: "80%" }}>
                  <div style={PageStyles.orgName}>{details.name}</div>
                  <div style={PageStyles.normalText}>{details.address.line1}</div>
                  <div style={PageStyles.normalText}>{details.address.line2}</div>
                  <div style={PageStyles.normalText}>{`${details.address.city}, ${details.address.state}-${details.address.zip}`}</div>
                  <div style={PageStyles.normalText}>{`M: ${details.contact.phone} Email: ${details.contact.email}`}</div>
               </div>
               <img src={details.logo.toJSON().url} alt="logo" style={PageStyles.orgLogo} />
            </div>
            <div style={PageStyles.documentBody}>
               <div style={PageStyles.documentTitle}>JOB SHEET ALLOCATION RECORD</div>
               <div style={PageStyles.detialsListContainer}>
                  <div style={{ flex: 0.5 }}>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("80px")}>Lab Code</div>
                        <div>: {`${details.prefix}-${sample?.sampleId}`}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("80px")}>Commodity</div>
                        <div>: {sample?.name}</div>
                     </div>
                  </div>
                  <div style={{ flex: 0.5, alignItems: "center", textAlign: "center" }}>
                     <Barcode value={`${details.prefix}-${sample?.sampleId}`} />
                  </div>
               </div>
            </div>

            <div style={PageStyles.tableRow}>
               <div style={PageStyles.tableHeaderCol("6%")}>Sr No.</div>
               <div style={PageStyles.tableHeaderCol("23%")}>Section</div>
               <div style={PageStyles.tableHeaderCol("31%")}>Allotted Test Perameters</div>
               <div style={PageStyles.tableHeaderLastCol("40%")}>Allotted to Chemist/ Microbiologist/ Analyst</div>
            </div>
            {sample?.sampleResultParameters.map((parameter, idx) => (
               <div style={PageStyles.tableRow}>
                  <div style={PageStyles.tableColCenterText("6%")}>{idx + 1}.</div>
                  <div style={PageStyles.tableCol("23%")}>{parameter?.department?.get("name")}</div>
                  <div style={PageStyles.tableCol("31%")}>{parameter?.name}</div>
                  <div style={PageStyles.tableLastCol("40%")}>{parameter.assign_to ? parameter?.assign_to?.get("name") : "N/A"}</div>
               </div>
            ))}
         </div>
      );
   }
}
