// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Props } from "./types";
import { Breadcrumb, ScreenLoader } from "../../components";
import { getCustomers } from "../../redux/actions/CustomerActions";
import AppState from "../../redux/types";

const breadcrumbItems = [
   { path: "/", name: "Dashboard" },
   { path: "/customer", name: "Customers" },
];

const Customer = (props: Props) => {
   const [loading, setLoading] = useState<boolean>(true);
   // const [rows, setRows] = useState<any>([]);

   const focus = async () => {
      await props.getCustomers();
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const { customerPermission } = props;
   
   return loading ? (
      <ScreenLoader />
   ) : (
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
   customerPermission: state.user.user.role.permission.customer,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getCustomers }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Customer);
