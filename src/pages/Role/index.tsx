// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import { Checkbox } from "@atlaskit/checkbox";
import { colors } from "@atlaskit/theme";
import Button from "@atlaskit/button";
import Textfield from "@atlaskit/textfield";
import Form, { Field } from "@atlaskit/form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Page, { Grid, GridColumn } from "@atlaskit/page";

// ====================================== File imports ======================================
import { Props, AddRoleForm } from "./types";
import { Breadcrumb } from "../../components";
import { getRoleAccessPermission, updateRole, createRole } from "../../redux/actions/RoleActions";
import AppState from "../../redux/types";
import { ScreenLoader } from "../../components";
import "./Role.css";

// ====================================== styles ======================================

const breadcrumbItems = [
   { path: "/", name: "Organization Settings" },
   { path: "/organizationsettings/role", name: "Role" },
];

const roleItems: Array<string> = [
   " ",
   "Role",
   "User",
   "Customer",
   "Department",
   "Samples/Group",
   "Samples/Parameter",
   "Samples/Method",
   "Samples/Sample",
   "Samples/Add",
   "Samples/{id}",
   "Samples/{id}/Update",
   "Samples/{id}/TestRequest",
   "Samples/{id}/JobAllotment",
   "Samples/{id}/JobSheet",
   "Samples/{id}/Result",
];

const Role = (props: Props) => {
   const [loading, setLoading] = useState<boolean>(true);
   const [roles, setRoles] = useState<any>({});

   const fetch = async () => {
      setLoading(true);
      await props.getRoleAccessPermission();
      setLoading(false);
   };

   useEffect(() => {
      fetch();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   useEffect(() => {
      setRoles(props.access);
   }, [props.access]);

   return (
      <Page>
         <Grid spacing="compact" layout="fluid">
            <GridColumn medium={12}>
               <Breadcrumb
                  items={breadcrumbItems}
                  screen="Role"
                  right={
                     <div style={{ display: "flex" }}>
                        <Form
                           onSubmit={async (addRoleForm: AddRoleForm) => {
                              try {
                                 await props.createRole(addRoleForm);
                              } catch (error) {}
                           }}
                        >
                           {({ formProps, submitting }: any) => (
                              <form {...formProps} style={{ display: "flex" }}>
                                 <Field label="" isRequired name="roleName" defaultValue="">
                                    {({ fieldProps }: any) => <Textfield {...fieldProps} placeholder="Role Name" style={{ width: 200 }} />}
                                 </Field>
                                 <Button
                                    type="submit"
                                    style={{ height: 38, marginLeft: 10, marginTop: 9 }}
                                    appearance="primary"
                                    isLoading={submitting}
                                 >
                                    Add new role
                                 </Button>
                              </form>
                           )}
                        </Form>
                     </div>
                  }
               />
            </GridColumn>
            {loading ? (
               <ScreenLoader />
            ) : (
               <React.Fragment>
                  <GridColumn medium={3}>
                     {roleItems.map((item, idx) => (
                        <div
                           className="cell"
                           style={{
                              borderColor: colors.N60,
                              fontWeight: "bold",
                              minWidth: 210,
                              justifyContent: "left",
                              overflow: "scroll",
                           }}
                           key={item + idx}
                        >
                           {item}
                        </div>
                     ))}
                  </GridColumn>
                  <GridColumn medium={9}>
                     <div style={{ display: "flex", flex: 1, overflow: "scroll", background: colors.N10 }}>
                        {Object.keys(roles).map((role: string, idx: number) => (
                           <div key={role + idx} style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                              <div className="cell" style={{ borderColor: colors.N60, fontWeight: "bold", background: colors.N0 }}>
                                 {role}
                              </div>
                              {Object.keys(roles[role]).map((roleItems: any, idx: number) => (
                                 <div className="cell" style={{ borderColor: colors.N60 }} key={role + roleItems + idx}>
                                    <Checkbox
                                       value="R"
                                       label="R"
                                       isDisabled={role === "admin" || roleItems === "role"}
                                       defaultChecked={roles[role][roleItems].read}
                                       onChange={async () => {
                                          var updateRoles = roles;
                                          updateRoles[role][roleItems]["read"] = !roles[role][roleItems].read;
                                          await props.updateRole({ name: role, permission: updateRoles[role] });
                                          setRoles(updateRoles);
                                       }}
                                       name={`checkbox-r-${role + roleItems + idx}`}
                                       testId={`cb-default-r-${role + roleItems + idx}`}
                                    />
                                    <Checkbox
                                       value="W"
                                       label="W"
                                       isDisabled={role === "admin" || roleItems === "role"}
                                       defaultChecked={roles[role][roleItems].write}
                                       onChange={async () => {
                                          var updateRoles = roles;
                                          updateRoles[role][roleItems]["write"] = !roles[role][roleItems].write;
                                          await props.updateRole({ name: role, permission: updateRoles[role] });
                                          setRoles(updateRoles);
                                       }}
                                       name={`checkbox-w-${role + roleItems}`}
                                       testId={`cb-default-w-${role + roleItems}`}
                                    />
                                 </div>
                              ))}
                           </div>
                        ))}
                     </div>
                  </GridColumn>
               </React.Fragment>
            )}
         </Grid>
      </Page>
   );
};

const mapStateToProps = (state: AppState) => ({
   access: state.role.access,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getRoleAccessPermission, updateRole, createRole }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
