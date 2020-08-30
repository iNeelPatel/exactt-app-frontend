import { RoleState } from "../../redux/types/RoleTypes";

export interface Props extends RoleState {
   updateRole: (arg0: UpdateRolePerams) => object;
   getRoleAccessPermission: () => object;
}

interface UpdateRolePerams {
   name: string;
   permission: object;
}
