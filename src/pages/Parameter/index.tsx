// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import EditIcon from "@atlaskit/icon/glyph/edit";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DynamicTable from "@atlaskit/dynamic-table";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/parameter", name: "Parameters" },
];

const Parameter = (props: Props) => {
   const { sampleParameterPermission } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Parameters"
                  right={
                     sampleParameterPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/user/add")}
                        >
                           Add parameter
                        </Button>
                     )
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>Parameters</GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleParameterPermission: state.user.user.role.permission.samples_parameter,
});

export default connect(mapStateToProps)(Parameter);
