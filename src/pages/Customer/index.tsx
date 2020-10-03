// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import Button from "@atlaskit/button";
import AddIcon from "@atlaskit/icon/glyph/add";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DynamicTable from "@atlaskit/dynamic-table";
import EditIcon from "@atlaskit/icon/glyph/edit";

// ====================================== File imports ======================================
import { Props } from "./types";
import { Breadcrumb, ScreenLoader, DeleteButton } from "../../components";
import { getCustomers, setDetailsCustomer } from "../../redux/actions/CustomerActions";
import AppState from "../../redux/types";
import { Customer } from "../../redux/types/CustomerTypes";

const breadcrumbItems = [
   { path: "/", name: "Dashboard" },
   { path: "/customer", name: "Customers" },
];

const CustomerScreen = (props: Props) => {
   const { customers } = props;
   const [loading, setLoading] = useState<boolean>(true);
   const [rows, setRows] = useState<any>([]);

   const focus = async () => {
      await props.getCustomers();
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const { customerPermission } = props;

   useEffect(() => {
      let createRows: Array<object> = customers?.map((customer: Customer, id: number) => ({
         key: `row${customer.objectId}`,
         cells: [
            {
               key: `cell${customer.objectId}${customer.name}`,
               content: (
                  <Button
                     appearance="link"
                     onClick={async () => {
                        await props.setDetailsCustomer(customer);
                        props.history.push(`/customer/details/${customer.objectId}`);
                     }}
                  >
                     {customer.name}
                  </Button>
               ),
            },
            {
               key: `cell${customer.objectId}${customer.contact.name}`,
               content: <div>{customer.contact.name}</div>,
            },
            {
               key: `cell${customer.objectId}${customer.contact.phone}`,
               content: <div>{customer.contact.phone}</div>,
            },
            {
               key: `cell${customer.objectId}${customer.contact.email}`,
               content: <div>{customer.contact.email}</div>,
            },
            {
               key: `cell${customer.objectId}${customer.contact.email}`,
               content: (
                  <div>
                     {customer.address.city}, {customer.address.state}{" "}
                  </div>
               ),
            },
            {
               key: `cell${customer.objectId}-action`,
               content: customerPermission.write && (
                  <div style={{ display: "flex" }}>
                     <Button
                        iconBefore={<EditIcon label="Edit icon" size="small" />}
                        appearance="link"
                        onClick={() => props.history.push(`/customer/edit/${customer.objectId}`)}
                     >
                        Edit
                     </Button>
                     <DeleteButton onClick={() => props.history.push(`/customer/edit/${customer.objectId}`)} />
                  </div>
               ),
            },
         ],
      }));

      setRows(createRows);
   }, [customers, customerPermission.write, props.history]);

   const head: any = {
      cells: [
         {
            key: "name",
            content: "Name",
            isSortable: true,
            shouldTruncate: false,
         },
         {
            key: "person",
            content: "Person",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "phone",
            content: "Phone",
            isSortable: false,
            shouldTruncate: false,
         },
         {
            key: "email",
            content: "Email",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "address",
            content: "Address",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "action",
            content: "",
            width: customerPermission.write ? 17 : 1,
            isSortable: false,
            shouldTruncate: false,
         },
      ],
   };

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
            <GridColumn medium={12}>
               <DynamicTable
                  head={head}
                  rows={rows}
                  rowsPerPage={16}
                  defaultPage={1}
                  isFixedSize
                  isLoading={loading}
                  defaultSortKey="name"
                  defaultSortOrder="ASC"
                  onSort={() => console.log("onSort")}
                  onSetPage={() => console.log("onSetPage")}
               />
            </GridColumn>
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   customerPermission: state.user.user.role.permission.customer,
   customers: state.customer.customers,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getCustomers, setDetailsCustomer }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerScreen);
