import { Action } from "redux";

interface RoleActionTypeInterface {
   GET_ROLE_ACCESS: string;
   UPDATE_ROLE: string;
}

export const RoleActionType: RoleActionTypeInterface = {
   GET_ROLE_ACCESS: "GET_ROLE_ACCESS",
   UPDATE_ROLE: "UPDATE_ROLE",
};

export interface RoleAction extends Action {
   type: string;
   payload: any;
}

export interface RoleState {
   access: object;
   updateRole: object;
}

type PromiseAction = Promise<RoleAction>;
type ThunkAction = (dispatch: RoleDispatch) => any;
export type RoleDispatch = (action: ThunkAction | PromiseAction | RoleAction) => any;
