// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Props, UserData } from "./types";
import { Breadcrumb, ScreenLoader } from "../../../components";
import { getDepartments } from "../../../redux/actions/DepartmentActions";
import { Departments } from "../../../redux/types/DepartmentTypes";
import AppState from "../../../redux/types";
import AddUserForm from "./AddUserForm";

const AddUser = (props: Props) => {
   const { departments } = props;
   const { userId } = props.match.params;
   const [loading, setLoading] = useState(true);
   const [departmentList, setDepartmentList] = useState([]);

   const focus = async () => {
      await props.getDepartments();
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
   }, [departments]);

   const breadcrumbItems = [
      { path: "/", name: "Organization Settings" },
      { path: "/organizationsettings/user", name: "Users" },
      { path: `/organizationsettings/user/${userId ? `edituser/${userId}` : "adduser"}`, name: userId ? "Edit user" : "Add user" },
   ];

   const handleBack = () => {
      props.history.goBack();
   };

   const handleSubmit = (userData: UserData) => {
      console.log(userData);
   };

   console.log(props.match.params);
   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={userId ? "Edit user" : "Add user"} />
            </GridColumn>
            {loading ? (
               <ScreenLoader />
            ) : (
               <GridColumn medium={7}>
                  <AddUserForm onBack={handleBack} onSubmit={handleSubmit} departmentList={departmentList} />
               </GridColumn>
            )}
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   departments: state.department.departments,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getDepartments }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
