export interface RoleState {
   access: object;
   updateRole: object;
   rolesList: RoleItem[];
}

export interface RoleItem {
   name: string;
   objectId: string;
}
