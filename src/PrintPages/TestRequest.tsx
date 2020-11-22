import React, { Component } from "react";
import { TestRequestProps } from "./Types";
import Barcode from "./Barcode";
import PageStyles from "./PageStyles";
import moment from "moment";

export default class JobAllotment extends Component<TestRequestProps, any> {
   render() {
      const { details, sample } = this.props;

      return (
         <div className="print-container" style={{ margin: "0", padding: "0" }}>
            <div style={PageStyles.header}>
               <div>
                  <div style={PageStyles.orgName}>{details.name}</div>
                  <div style={PageStyles.normalText}>{details.address.line1}</div>
                  <div style={PageStyles.normalText}>{details.address.line2}</div>
                  <div style={PageStyles.normalText}>{`${details.address.city}, ${details.address.state}-${details.address.zip}`}</div>
                  <div style={PageStyles.normalText}>{`M: ${details.contact.phone} Email: ${details.contact.email}`}</div>
               </div>
               <img src={details.logo.toJSON().url} alt="logo" style={PageStyles.orgLogo} />
            </div>
            <div style={PageStyles.documentBody}>
               <div style={PageStyles.documentTitle}>TEST REQUEST</div>
               <div style={PageStyles.detialsListContainer}>
                  <div style={{ flex: 0.5 }}>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("90px")}>Lab Code</div>
                        <div>: {`${details.prefix}-${sample?.sampleId}`}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("90px")}>Commodity</div>
                        <div>: {sample?.name}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("90px")}>Sample Code</div>
                        <div>: {sample?.sample_code}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("90px")}>Brand</div>
                        <div>: {sample?.brand_name}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("90px")}>Party Name</div>
                        <div>: {sample?.customer.name}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("90px")}>Address</div>
                        <div>:</div>
                        <div style={{ marginLeft: 4, marginTop: 5 }}>
                           <div style={{ lineHeight: 1 }}>{sample?.customer.address.line1}</div>
                           <div style={{ lineHeight: 1 }}>{sample?.customer.address.line2}</div>
                           <div style={{ lineHeight: 1 }}>
                              {`${sample?.customer.address.city}, ${sample?.customer.address.state}-${sample?.customer.address.zip}`}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div style={{ flex: 0.5 }}>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("100px")}>Date of Receipt</div>
                        <div>: {moment(sample?.date, "YYYY-MM-DD").format("DD/MM/YYYY")}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("100px")}>Batch no.</div>
                        <div>: {sample?.batch_no}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("100px")}>DOM</div>
                        <div>: {moment(sample?.mfg_date).format("DD/MM/YYYY")}</div>
                     </div>
                     <div style={{ display: "flex" }}>
                        <div style={PageStyles.detialsListTitle("100px")}>Qty</div>
                        <div>: {sample?.sample_qty}</div>
                     </div>
                     <div style={{ alignItems: "center", textAlign: "center" }}>
                        <Barcode value={`${details.prefix}-${sample?.sampleId}`} />
                     </div>
                  </div>
               </div>
            </div>

            {/* <div className="page-break" /> */}

            <div style={PageStyles.tableRowAllBorder}>
               <div style={{ ...PageStyles.tableColNoBorder("6%"), fontWeight: "bold" }}>Sr No.</div>
               <div style={{ ...PageStyles.tableColNoBorder("96%"), fontWeight: "bold" }}>Section</div>
            </div>
            <div style={{ ...PageStyles.tableRowAllBorder, flexDirection: "column" }}>
               {sample?.sampleResultParameters.map((parameter, idx) => (
                  <div style={{ display: "flex" }}>
                     <div style={PageStyles.tableColNoBorder("6%")}>{idx + 1}.</div>
                     <div style={PageStyles.tableColNoBorder("96%")}>{parameter.name}</div>
                  </div>
               ))}
            </div>
            <div style={{ ...PageStyles.tableRowAllBorder, height: "30mm", alignItems: "flex-end" }}>
               <div style={{ display: "flex", flex: 0.5, justifyContent: "center" }}>
                  <span
                     style={{
                        borderTopWidth: 1,
                        borderTopStyle: "dotted",
                        borderTopColor: "black",
                        paddingLeft: 5,
                        paddingRight: 5,
                        marginBottom: 5,
                     }}
                  >
                     Sign (Customer Representa..ve), if any
                  </span>
               </div>
               <div style={{ display: "flex", flex: 0.5, justifyContent: "center" }}>
                  <span
                     style={{
                        borderTopWidth: 1,
                        borderTopStyle: "dotted",
                        borderTopColor: "black",
                        paddingLeft: 5,
                        paddingRight: 5,
                        marginBottom: 5,
                     }}
                  >
                     Sign (Leb Representa..ve)
                  </span>
               </div>
            </div>
            <div style={PageStyles.tableRow}>
               <div style={PageStyles.tableColCenterText("25%")}>REVIEWD BY</div>
               <div
                  style={{
                     ...PageStyles.tableColCenterText("75%"),
                     borderRightColor: "black",
                     borderRightWidth: 1,
                     borderRightStyle: "solid",
                  }}
               >
                  SAMPLE ALLOTTED TO
               </div>
            </div>
            <div style={PageStyles.tableRow}>
               <div style={{ ...PageStyles.tableCol("25%"), display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
                  <div style={{ textAlign: "center" }}>AUTHO. SIGNATORY</div>
               </div>
               <div style={PageStyles.tableLastCol("75%")}>
                  <div style={{ display: "flex" }}>
                     <div style={{ width: 70 }}>CHEM.</div>
                     <div style={{ width: 70 }}>{"1)"}</div>
                     <div style={{ width: 70 }}>{"2)"}</div>
                     <div style={{ width: 70 }}>{"3)"}</div>
                     <div style={{ width: 70 }}>{"4)"}</div>
                     <div style={{ width: 70 }}>{"5)"}</div>
                  </div>
                  <div style={{ display: "flex" }}>
                     <div style={{ width: 70 }}>BIO.</div>
                     <div style={{ width: 70 }}>{"1)"}</div>
                     <div style={{ width: 70 }}>{"2)"}</div>
                     <div style={{ width: 70 }}>{"3)"}</div>
                  </div>
                  <div style={{ display: "flex" }}>
                     <div style={{ width: 70 }}>MEC.</div>
                     <div style={{ width: 70 }}>{"1)"}</div>
                     <div style={{ width: 70 }}>{"2)"}</div>
                     <div style={{ width: 70 }}>{"3)"}</div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
