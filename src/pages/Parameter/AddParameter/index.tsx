// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import Page, { Grid, GridColumn } from "@atlaskit/page";
import AppState from "../../../redux/types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb, ScreenLoader } from "../../../components";
import AddParameterForm from "./AddParameterForm";
import { getDepartments } from "../../../redux/actions/DepartmentActions";
import { Departments } from "../../../redux/types/DepartmentTypes";
import { Props } from "./types";

const AddSampleGroup = (props: Props) => {
   const { parameterId } = props.match.params;
   const { departments } = props;
   const [departmentList, setDepartmentList] = useState([]);
   const [loading, setLoading] = useState(true);

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
      { path: "/organizationsettings/parameter", name: "Parameters" },
      { path: `/organizationsettings/parameter/${parameterId ? `edit/${parameterId}` : "add"}`, name: parameterId ? "Edit" : "Add" },
   ];

   const onBack = () => {
      props.history.goBack();
   };

   const onSubmit = (data: any) => {
      console.log(data);
   };

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb items={breadcrumbItems} screen={parameterId ? "Edit Parameter" : "Add Parameter"} />
            </GridColumn>
            {loading ? (
               <ScreenLoader />
            ) : (
               <GridColumn medium={8}>
                  <AddParameterForm departmentList={departmentList} onBack={onBack} onSubmit={onSubmit} />
               </GridColumn>
            )}
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   sampleGroupPermission: state.user.user.role.permission.samples_group,
   departments: state.department.departments,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getDepartments }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddSampleGroup);
