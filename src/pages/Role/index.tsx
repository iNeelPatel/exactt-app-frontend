// ====================================== Module imports ======================================
import React, { useState } from "react";
import { Checkbox } from "@atlaskit/checkbox";
import Button from "@atlaskit/button";
import { colors } from "@atlaskit/theme";

// ====================================== File imports ======================================
import { Breadcrumb } from "../../components";
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

const rolesAccess: any = {
   Admin: {
      role: { r: true, w: true },
      user: { r: true, w: true },
      customer: { r: true, w: true },
      department: { r: true, w: true },
      samples_group: { r: true, w: true },
      samples_parameter: { r: true, w: true },
      samples_method: { r: true, w: true },
      samples_sample: { r: true, w: true },
      samples_add: { r: true, w: true },
      samples_id: { r: true, w: true },
      samples_id_update: { r: true, w: true },
      samples_id_testrequest: { r: true, w: true },
      samples_id_joballotment: { r: true, w: true },
      samples_id_jobsheet: { r: true, w: true },
      samples_id_result: { r: true, w: true },
   },
   Account: {
      role: { r: false, w: false },
      user: { r: true, w: false },
      customer: { r: true, w: true },
      department: { r: false, w: false },
      samples_group: { r: false, w: false },
      samples_parameter: { r: false, w: false },
      samples_method: { r: false, w: false },
      samples_sample: { r: false, w: false },
      samples_add: { r: false, w: false },
      samples_id: { r: true, w: false },
      samples_id_update: { r: false, w: false },
      samples_id_testrequest: { r: true, w: true },
      samples_id_joballotment: { r: false, w: false },
      samples_id_jobsheet: { r: false, w: false },
      samples_id_result: { r: false, w: false },
   },
   HOD: {
      role: { r: false, w: false },
      user: { r: true, w: false },
      customer: { r: false, w: false },
      department: { r: false, w: false },
      samples_group: { r: false, w: false },
      samples_parameter: { r: true, w: false },
      samples_method: { r: true, w: false },
      samples_sample: { r: true, w: false },
      samples_add: { r: false, w: false },
      samples_id: { r: true, w: false },
      samples_id_update: { r: false, w: false },
      samples_id_testrequest: { r: false, w: false },
      samples_id_joballotment: { r: true, w: true },
      samples_id_jobsheet: { r: true, w: true },
      samples_id_result: { r: true, w: true },
   },
   Chemist: {
      role: { r: false, w: false },
      user: { r: true, w: false },
      customer: { r: false, w: false },
      department: { r: false, w: false },
      samples_group: { r: false, w: false },
      samples_parameter: { r: true, w: false },
      samples_method: { r: true, w: false },
      samples_sample: { r: true, w: false },
      samples_add: { r: false, w: false },
      samples_id: { r: true, w: false },
      samples_id_update: { r: false, w: false },
      samples_id_testrequest: { r: false, w: false },
      samples_id_joballotment: { r: true, w: false },
      samples_id_jobsheet: { r: true, w: true },
      samples_id_result: { r: true, w: true },
   },
   Receptionist: {
      role: { r: false, w: false },
      user: { r: true, w: false },
      customer: { r: true, w: true },
      department: { r: false, w: false },
      samples_group: { r: true, w: false },
      samples_parameter: { r: true, w: false },
      samples_method: { r: true, w: false },
      samples_sample: { r: true, w: false },
      samples_add: { r: true, w: true },
      samples_id: { r: true, w: false },
      samples_id_update: { r: false, w: false },
      samples_id_testrequest: { r: true, w: true },
      samples_id_joballotment: { r: true, w: true },
      samples_id_jobsheet: { r: false, w: false },
      samples_id_result: { r: false, w: false },
   },
};

const Role = () => {
   const [roles, setRoles] = useState<any>(rolesAccess);
   return (
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
         <Breadcrumb items={breadcrumbItems} screen="Role" />
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
                              defaultChecked={roles[role][roleItems].r}
                              onChange={() => {
                                 var updateRoles = roles;
                                 updateRoles[role][roleItems]["r"] = !roles[role][roleItems].r;
                                 setRoles(updateRoles);
                              }}
                              name={`checkbox-r-${role + roleItems + idx}`}
                              testId={`cb-default-r-${role + roleItems + idx}`}
                           />
                           <Checkbox
                              value="W"
                              label="W"
                              defaultChecked={roles[role][roleItems].w}
                              onChange={() => {
                                 var updateRoles = roles;
                                 updateRoles[role][roleItems]["w"] = !roles[role][roleItems].w;
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
         <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
            <Button appearance="primary" onClick={() => console.log(JSON.stringify(roles))} style={{ marginTop: 20 }}>
               Save Roles
            </Button>
         </div>
      </div>
   );
};

export default Role;
