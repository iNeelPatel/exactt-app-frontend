// ====================================== Module imports ======================================
import React, { useState, useEffect } from "react";
import { Checkbox } from "@atlaskit/checkbox";
import { colors } from "@atlaskit/theme";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
import { getRoleAccessPermission } from "../../redux/actions/RoleActions";
import AppState from "../../redux/types";
import { ScreenLoader } from "../../components";
import "./Role.css";

// ====================================== styles ======================================

const breadcrumbItems = [
   { path: "/organizationsettings", name: "Organization Settings" },
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

const Role = (props: any) => {
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
      setRoles(props.accessList);
   }, [props.accessList]);

   return (
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
         <Breadcrumb items={breadcrumbItems} screen="Role" />
         {loading ? (
            <ScreenLoader />
         ) : (
            <div style={{ display: "flex" }}>
               <div>
                  {roleItems.map((item, idx) => (
                     <div
                        className="cell"
                        style={{ borderColor: colors.N60, fontWeight: "bold", minWidth: 210, justifyContent: "left" }}
                        key={item + idx}
                     >
                        {item}
                     </div>
                  ))}
               </div>
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
                                 defaultChecked={roles[role][roleItems].read}
                                 onChange={() => {
                                    var updateRoles = roles;
                                    updateRoles[role][roleItems]["read"] = !roles[role][roleItems].read;
                                    console.log({ name: role, permission: updateRoles[role] });
                                    setRoles(updateRoles);
                                 }}
                                 name={`checkbox-r-${role + roleItems + idx}`}
                                 testId={`cb-default-r-${role + roleItems + idx}`}
                              />
                              <Checkbox
                                 value="W"
                                 label="W"
                                 defaultChecked={roles[role][roleItems].write}
                                 onChange={() => {
                                    var updateRoles = roles;
                                    updateRoles[role][roleItems]["write"] = !roles[role][roleItems].write;
                                    console.log({ name: role, permission: updateRoles[role] });
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
            </div>
         )}
      </div>
   );
};

const mapStateToProps = (state: AppState) => ({
   accessList: state.role.access,
});

function mapDispatchToProps(dispatch: any) {
   return {
      ...bindActionCreators({ getRoleAccessPermission }, dispatch),
   };
}

export default connect(mapStateToProps, mapDispatchToProps)(Role);
