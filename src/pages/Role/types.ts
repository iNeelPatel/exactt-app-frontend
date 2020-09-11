import { RoleState } from "../../redux/types/RoleTypes";
import { RouteComponentProps } from "react-router-dom";

export interface Props extends RoleState, RouteComponentProps {
   updateRole: (arg0: UpdateRoleParams) => object;
   getRoleAccessPermission: () => object;
   createRole: (arg0: CreateRoleParams) => object;
   rolePermission: {
      read: boolean;
      write: boolean;
   };
}

interface UpdateRoleParams {
   name: string;
   permission: object;
}

interface CreateRoleParams {
   roleName: string;
}

export interface AddRoleForm {
   roleName: string;
}
