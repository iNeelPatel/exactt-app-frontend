import { RoleState } from "../../redux/types/RoleTypes";

export interface Props extends RoleState {
   updateRole: (arg0: UpdateRoleParams) => object;
   getRoleAccessPermission: () => object;
   createRole: (arg0: CreateRoleParams) => object;
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
