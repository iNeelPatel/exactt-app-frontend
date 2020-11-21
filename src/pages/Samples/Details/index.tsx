// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import EditIcon from "@atlaskit/icon/glyph/edit";
import FileIcon from "@atlaskit/icon/glyph/file";
import { typography } from "@atlaskit/theme";
import { connect } from "react-redux";
import Lozenge from "@atlaskit/lozenge";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb, Heading, Divider, ScreenLoader } from "../../../components";
import AppState from "../../../redux/types";
import { Props } from "./types";
import CustomerDetails from "./CustomerDetails";
import SampleDetailsComponent from "./SampleDetails";
import TestDetails from "./TestDetails";
import ParametersDetails from "./ParametersDetails";
import { getSample, assignSample } from "../../../redux/actions/SamplesActions";
import { getUsers } from "../../../redux/actions/UserActions";

// ====================================== Print Page imports ======================================
import JobAllotmentPrint from "../../../PrintPages/JobAllotment";
import TestRequest from "../../../PrintPages/TestRequest";

let JobAllotementRef: any;
let TestRequestRef: any;

const SampleDetails = (props: Props) => {
   const { samplePermission, getSample, prefix, sample, getUsers, users, assignSample } = props;
   const { sampleId } = props.match.params;
   const [loading, setLoading] = useState(true);
   const [usersOptions, setusersOptions] = useState<any>([]);
   const sampleIdWithoutPrefix: string = sampleId.replace(`${prefix}-`, "");

   const focus = async () => {
      await getSample(sampleIdWithoutPrefix);
      await getUsers();
      setLoading(false);
   };

   const handleAssignSample = async (data: any) => {
      try {
         await assignSample(data);
         setLoading(true);
         await getSample(sampleIdWithoutPrefix);
         setLoading(false);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (users) {
         let usersOptions = users.map((user) => ({
            ...user,
            label: user.name,
            value: user.objectId,
         }));
         setusersOptions(usersOptions);
      }
   }, [users]);

   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/sample", name: "Sample" },
      { path: `/sample/id/${sampleId}`, name: `${sampleId}` },
   ];

   return loading ? (
      <ScreenLoader />
   ) : (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen={sampleId}
                  right={
                     <div>
                        <ReactToPrint content={() => JobAllotementRef}>
                           <PrintContextConsumer>
                              {({ handlePrint }) => (
                                 <Button style={{ height: 38, marginLeft: 10, marginTop: 9 }} appearance="link" onClick={handlePrint}>
                                    Job Allotment
                                 </Button>
                              )}
                           </PrintContextConsumer>
                        </ReactToPrint>

                        <ReactToPrint content={() => TestRequestRef}>
                           <PrintContextConsumer>
                              {({ handlePrint }) => (
                                 <Button style={{ height: 38, marginLeft: 10, marginTop: 9 }} appearance="link" onClick={handlePrint}>
                                    Test Request
                                 </Button>
                              )}
                           </PrintContextConsumer>
                        </ReactToPrint>

                        {samplePermission.write && (
                           <Button
                              type="submit"
                              style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                              appearance="link"
                              onClick={() => props.history.push("/sample/add")}
                           >
                              Job Sheet
                           </Button>
                        )}
                        {samplePermission.write && (
                           <Button
                              iconBefore={<FileIcon label="File icon" size="small" />}
                              type="submit"
                              style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                              appearance="link"
                              onClick={() => props.history.push(`/sample/id/${sampleId}/result`)}
                           >
                              Result
                           </Button>
                        )}
                        {samplePermission.write && (
                           <Button
                              iconBefore={<EditIcon label="Add icon" size="small" />}
                              type="submit"
                              style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                              appearance="link"
                              onClick={() => props.history.push("/sample/add")}
                           >
                              Edit
                           </Button>
                        )}
                     </div>
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>
               <div style={{ display: "none" }}>
                  <JobAllotmentPrint sample={sample} details={props.organization} ref={(el) => (JobAllotementRef = el)} />
               </div>

               <div style={{ display: "none" }}>
                  <TestRequest sample={sample} details={props.organization} ref={(el) => (TestRequestRef = el)} />
               </div>

               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ paddingRight: 50 }}>
                     <Heading mixin={typography.h300} style={{ marginTop: 1 }}>
                        {sample?.name}
                     </Heading>
                     <Heading mixin={typography.h200} style={{ marginTop: 1 }}>
                        {sample?.generic_name}
                     </Heading>
                  </div>
                  <div>
                     {sample?.status === 0 && (
                        <Lozenge appearance="removed" isBold>
                           Pending
                        </Lozenge>
                     )}
                     {sample?.status === 1 && (
                        <Lozenge appearance="inprogress" isBold>
                           In progress
                        </Lozenge>
                     )}
                     {sample?.status === 2 && (
                        <Lozenge appearance="success" isBold>
                           Complete
                        </Lozenge>
                     )}
                  </div>
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, textTransform: "uppercase" }}>
                     Customer
                  </Heading>
                  <CustomerDetails customer={sample?.customer} />
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, marginBottom: 8, textTransform: "uppercase" }}>
                     Sample details
                  </Heading>
                  <SampleDetailsComponent sampleDetails={sample} />
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, marginBottom: 8, textTransform: "uppercase" }}>
                     Test details
                  </Heading>
                  <TestDetails sampleDetails={sample} />
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, marginBottom: 8, textTransform: "uppercase" }}>
                     Parameters
                  </Heading>
                  <ParametersDetails
                     assignSample={handleAssignSample}
                     usersOptions={usersOptions}
                     parameters={sample?.sampleResultParameters.map((parameter) => ({
                        ...parameter,
                        assign_to: parameter.assign_to && {
                           ...parameter.assign_to.toJSON(),
                           label: parameter.assign_to.toJSON().name,
                           value: parameter.assign_to.toJSON().objectId,
                        },
                     }))}
                  />
               </div>

               <Divider />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   samplePermission: state.user.user.role.permission.samples_id,
   organization: state.orgnization.details,
   prefix: state.orgnization.details.prefix,
   sample: state.samples.sample,
   users: state.user.users,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getSample, getUsers, assignSample }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(SampleDetails);
