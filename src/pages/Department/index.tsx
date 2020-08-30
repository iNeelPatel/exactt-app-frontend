// ====================================== Module imports ======================================
import React, { useEffect, useState } from "react";
import DynamicTable from "@atlaskit/dynamic-table";
import InlineEdit from "@atlaskit/inline-edit";
import Textfield from "@atlaskit/textfield";
import Form, { Field } from "@atlaskit/form";
import Button from "@atlaskit/button";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import AppState from "../../redux/types";
import { getDepartments, createDepartment, updateDepartment } from "../../redux/actions/DepartmentActions";
import { Departments } from "../../redux/types/DepartmentTypes";
import { Props, CreateDepartmentForm } from "./types";

const breadcrumbItems = [
   { path: "/organizationsettings", name: "Organization Settings" },
   { path: "/organizationsettings/department", name: "Department" },
];

const Department = (props: Props) => {
   const [loading, setLoading] = useState<boolean>(true);
   const [rows, setRows] = useState<any>([]);
   const { departments, createDepartment, updateDepartment } = props;

   const focus = async () => {
      await props.getDepartments();
      setLoading(false);
   };

   useEffect(() => {
      focus();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      let createRows: Array<object> = departments.map((department: Departments, id: number) => ({
         key: `row-${department.objectId}`,
         cells: [
            {
               key: `cell-${department.objectId}-${department.name}`,
               content: (
                  <InlineEdit
                     defaultValue={department.name}
                     editView={(fieldProps) => <Textfield {...fieldProps} autoFocus />}
                     readView={() => <div style={{ paddingBottom: 4 }}>{department.name}</div>}
                     onConfirm={async (value) => {
                        setLoading(true);
                        await updateDepartment({ name: value, objectId: department.objectId });
                        setLoading(false);
                     }}
                  />
               ),
            },
         ],
      }));
      createRows.push({
         key: "row-add-department",
         cells: [
            {
               key: "cell-add-department",
               content: (
                  <div style={{ display: "flex" }}>
                     <Form
                        onSubmit={async (createDepartmentForm: CreateDepartmentForm) => {
                           try {
                              await createDepartment(createDepartmentForm);
                           } catch (error) {
                              console.log(error);
                           }
                        }}
                     >
                        {({ formProps, submitting }: any) => (
                           <form {...formProps} style={{ display: "flex" }}>
                              <Field label="" isRequired name="name" defaultValue="">
                                 {({ fieldProps }: any) => (
                                    <Textfield {...fieldProps} placeholder="Department name" style={{ width: 200 }} />
                                 )}
                              </Field>
                              <Button
                                 type="submit"
                                 style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                                 appearance="primary"
                                 isLoading={submitting}
                              >
                                 Add new department
                              </Button>
                           </form>
                        )}
                     </Form>
                  </div>
               ),
            },
         ],
      });
      setRows(createRows);
   }, [departments, createDepartment, updateDepartment]);

   const head: any = {
      cells: [
         {
            key: "departmentName",
            content: "Department Name",
            isSortable: true,
         },
      ],
   };

   return (
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
         <Breadcrumb items={breadcrumbItems} screen="Department" />
         <DynamicTable
            // caption={caption}
            head={head}
            rows={rows}
            rowsPerPage={5}
            defaultPage={1}
            isFixedSize
            isLoading={loading}
            defaultSortKey="term"
            defaultSortOrder="ASC"
            onSort={() => console.log("onSort")}
            onSetPage={() => console.log("onSetPage")}
         />
      </div>
   );
};

const mapStateToProps = (state: AppState) => ({
   departments: state.department.departments,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getDepartments, createDepartment, updateDepartment }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Department);
