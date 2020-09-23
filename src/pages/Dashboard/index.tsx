// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";

const breadcrumbItems = [{ path: "/", name: "Dashboard" }];

const Dashboard = (props: any) => {
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen="Dashboard" />
            </GridColumn>
            <GridColumn medium={12}>
               <img src={props.orgnization.logo.url()} alt="client's logo" />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
   orgnization: state.orgnization.details,
});

export default connect(mapStateToProps)(Dashboard);
