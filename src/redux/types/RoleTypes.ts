import { Action } from "redux";

interface RoleActionTypeInterface {
   GET_ROLE_ACCESS: string;
}

export const RoleActionType: RoleActionTypeInterface = {
   GET_ROLE_ACCESS: "GET_ROLE_ACCESS",
};

export interface RoleAction extends Action {
   type: string;
   payload: any;
}

export interface RoleState {
   access: any;
}

type PromiseAction = Promise<RoleAction>;
type ThunkAction = (dispatch: RoleDispatch) => any;
export type RoleDispatch = (action: ThunkAction | PromiseAction | RoleAction) => any;
