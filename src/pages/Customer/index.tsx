// ====================================== Module imports ======================================
import React from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { connect } from "react-redux";

// ====================================== File imports ======================================
import { Props } from "./types";
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";

const breadcrumbItems = [
   { path: "/", name: "Dashboard" },
   { path: "/customer", name: "Customers" },
];

const Customer = (props: Props) => {
   const { customerPermission } = props;
   console.log(customerPermission);
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Customers"
                  right={
                     customerPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/customer/add")}
                        >
                           Add customer
                        </Button>
                     )
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>Customer</GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   customerPermission: state.user.user.role,
});

export default connect(mapStateToProps)(Customer);
