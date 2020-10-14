// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import EditIcon from "@atlaskit/icon/glyph/edit";
import FileIcon from "@atlaskit/icon/glyph/file";
import { typography } from "@atlaskit/theme";
import { connect } from "react-redux";
import Lozenge from "@atlaskit/lozenge";

// ====================================== File imports ======================================
import { Breadcrumb, Heading, Divider } from "../../../components";
import AppState from "../../../redux/types";
import { Props } from "./types";
import CustomerDetails from "./CustomerDetails";
import SampleDetailsComponent from "./SampleDetails";
import TestDetails from "./TestDetails";
import ParametersDetails from "./ParametersDetails";

const SampleDetails = (props: Props) => {
   const { samplePermission } = props;
   const { sampleId } = props.match.params;

   const breadcrumbItems = [
      { path: "/", name: "Dashboard" },
      { path: "/sample", name: "Sample" },
      { path: `/${sampleId}`, name: `${sampleId}` },
   ];
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen={sampleId}
                  right={
                     <div>
                        {samplePermission.write && (
                           <Button
                              type="submit"
                              style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                              appearance="link"
                              onClick={() => props.history.push("/sample/add")}
                           >
                              Job Allotment
                           </Button>
                        )}
                        {samplePermission.write && (
                           <Button
                              type="submit"
                              style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                              appearance="link"
                              onClick={() => props.history.push("/sample/add")}
                           >
                              Test Request
                           </Button>
                        )}
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
                              onClick={() => props.history.push("/sample/add")}
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
               <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div style={{ paddingRight: 50 }}>
                     <Heading mixin={typography.h300} style={{ marginTop: 1 }}>
                        Sample name
                     </Heading>
                     <Heading mixin={typography.h200} style={{ marginTop: 1 }}>
                        Genric name
                     </Heading>
                  </div>
                  <div>
                     <Lozenge isBold appearance="success">
                        Complete
                     </Lozenge>
                  </div>
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, textTransform: "uppercase" }}>
                     Customer
                  </Heading>
                  <CustomerDetails customer={{}} />
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, marginBottom: 8, textTransform: "uppercase" }}>
                     Sample details
                  </Heading>
                  <SampleDetailsComponent sampleDetails={{}} />
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, marginBottom: 8, textTransform: "uppercase" }}>
                     Test details
                  </Heading>
                  <TestDetails sampleDetails={{}} />
               </div>

               <Divider />

               <div>
                  <Heading mixin={typography.h200} style={{ marginTop: 1, marginBottom: 8, textTransform: "uppercase" }}>
                     Parameters
                  </Heading>
                  <ParametersDetails parameters={{}} />
               </div>

               <Divider />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   samplePermission: state.user.user.role.permission.samples_id,
});

export default connect(mapStateToProps)(SampleDetails);
