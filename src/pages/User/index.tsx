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
import { Breadcrumb, DeleteButton } from "../../components";
import { Props } from "./types";
import AppState from "../../redux/types";
import { getUsers } from "../../redux/actions/UserActions";

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/user", name: "Users" },
];

const User = (props: Props) => {
   const { userPermission, getUsers, users } = props;
   const [loading, setLoading] = useState(true);
   const [rows, setRows] = useState<any>([]);

   const focus = async () => {
      await getUsers();
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      let createRows: Array<object> = users?.map((user: any, id: number) => ({
         key: `row${user.objectId}`,
         cells: [
            {
               key: `cell${user.objectId}${user.name}`,
               content: <div style={{ height: 34, display: "flex", alignItems: "center" }}>{user.name}</div>,
            },
            {
               key: `cell${user.objectId}${user.department.name}`,
               content: <div>{user.department.name}</div>,
            },
            {
               key: `cell${user.objectId}${user.role.name}`,
               content: <div>{user.role.name}</div>,
            },
            {
               key: `cell${user.objectId}${user.phone}`,
               content: <div>{user.phone}</div>,
            },
            {
               key: `cell${user.objectId}${user.email}`,
               content: <div>{user.email}</div>,
            },
            {
               key: `cell${user.objectId}-action`,
               content: userPermission.write && (
                  <div style={{ display: "flex" }}>
                     <Button
                        iconBefore={<EditIcon label="Edit icon" size="small" />}
                        appearance="link"
                        isDisabled={user.department.name === "Admin"}
                        onClick={() => props.history.push(`/organizationsettings/user/edit/${user.objectId}`)}
                     >
                        Edit
                     </Button>
                     <DeleteButton
                        onClick={() => props.history.push(`/organizationsettings/user/edit/${user.objectId}`)}
                        isDisabled={user.department.name === "Admin"}
                     />
                  </div>
               ),
            },
         ],
      }));

      setRows(createRows);
   }, [users, props.history, userPermission.write]);

   const head: any = {
      cells: [
         {
            key: "name",
            content: "Name",
            isSortable: true,
            shouldTruncate: false,
         },
         {
            key: "department",
            width: 15,
            content: "Department",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "role",
            content: "Role",
            width: 10,
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "phone",
            content: "Phone",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "email",
            content: "Email",
            isSortable: false,
            shouldTruncate: true,
         },
         {
            key: "action",
            content: "",
            width: userPermission.write ? 17 : 1,
            isSortable: false,
            shouldTruncate: false,
         },
      ],
   };

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Users"
                  right={
                     userPermission.write && (
                        <Button
                           iconBefore={<AddIcon label="Add icon" size="small" />}
                           type="submit"
                           style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                           appearance="primary"
                           onClick={() => props.history.push("/organizationsettings/user/add")}
                        >
                           Add new user
                        </Button>
                     )
                  }
               />
            </GridColumn>
            <GridColumn medium={12}>
               <DynamicTable
                  head={head}
                  rows={rows}
                  rowsPerPage={10}
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
   userPermission: state.user.user.role.permission.user,
   users: state.user.users,
   customers: state.customer.customers,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getUsers }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
