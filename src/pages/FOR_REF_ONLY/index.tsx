// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";
import { Props } from "./types";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/samplegroup", name: "Sample Groups" },
];

const Parameter = (props: Props) => {
   const { sampleGroupPermission } = props;
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Sample Groups"
                  right={
                     sampleGroupPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/samplegroup/add")}
                        >
                           Add sample group
                        </Button>
                     )
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>Add sample group</GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_method,
});

export default connect(mapStateToProps)(Parameter);
