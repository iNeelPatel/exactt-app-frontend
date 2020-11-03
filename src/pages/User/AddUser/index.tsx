// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Props, UserData } from "./types";
import { Breadcrumb, ScreenLoader } from "../../../components";
import { getDepartments } from "../../../redux/actions/DepartmentActions";
import { getAccessRoleList } from "../../../redux/actions/RoleActions";
import { createUser, getUser, updateUser } from "../../../redux/actions/UserActions";
import { Departments } from "../../../redux/types/DepartmentTypes";
import { RoleItem } from "../../../redux/types/RoleTypes";
import AppState from "../../../redux/types";
import AddUserForm from "./AddUserForm";

const AddUser = (props: Props) => {
   const { departments, rolesList, editUser } = props;
   const { userId } = props.match.params;
   const [loading, setLoading] = useState(true);
   const [departmentList, setDepartmentList] = useState([]);
   const [roleList, setRoleList] = useState([]);

   const focus = async () => {
      if (userId) {
         await props.getUser(userId);
      }
      await props.getDepartments();
      await props.getAccessRoleList();
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      if (departments.length > 0) {
         const list: any = departments.map((department: Departments) => ({ label: department.name, value: department.objectId }));
         setDepartmentList(list);
      }
      if (rolesList.length > 0) {
         const list: any = rolesList.map((role: RoleItem) => ({ label: role.name, value: role.objectId }));
         setRoleList(list);
      }
   }, [departments, rolesList]);

   const breadcrumbItems = [
      { path: "/", name: "Organization Settings" },
      { path: "/organizationsettings/user", name: "Users" },
      { path: `/organizationsettings/user/${userId ? `edit/${userId}` : "add"}`, name: userId ? "Edit user" : "Add user" },
   ];

   const handleBack = () => {
      props.history.goBack();
   };

   const handleSubmit = async (userData: UserData) => {
      if (userId) {
         await props.updateUser({ ...userData, objectId: userId });
      } else {
         await props.createUser(userData);
      }
   };

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={userId ? "Edit user" : "Add user"} />
            </GridColumn>
            {loading ? (
               <ScreenLoader />
            ) : (
               <GridColumn medium={8}>
                  <AddUserForm
                     onBack={handleBack}
                     onSubmit={handleSubmit}
                     departmentList={departmentList}
                     roleList={roleList}
                     edit={userId?.length > 0}
                     editUser={editUser}
                  />
               </GridColumn>
            )}
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   departments: state.department.departments,
   rolesList: state.role.rolesList,
   editUser: state.user.userData,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getDepartments, createUser, getAccessRoleList, getUser, updateUser }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
