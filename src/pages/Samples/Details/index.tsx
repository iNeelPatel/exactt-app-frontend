// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import EditIcon from "@atlaskit/icon/glyph/edit";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../../components";
import AppState from "../../../redux/types";
import { Props } from "./types";

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
            <GridColumn medium={12}>sample Details</GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   samplePermission: state.user.user.role.permission.samples_id,
});

export default connect(mapStateToProps)(SampleDetails);
