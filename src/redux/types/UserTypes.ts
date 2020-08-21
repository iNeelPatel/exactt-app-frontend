import { Action } from "redux";

interface UserActionTypeInterface {
   LOGIN: string;
   SIGNUP: string;
}

export const UserActionType: UserActionTypeInterface = {
   LOGIN: "LOGIN",
   SIGNUP: "SIGNUP",
};

export interface UserAction extends Action {
   type: string;
   payload: any;
}

export interface UserState {
   user: any;
}

type PromiseAction = Promise<UserAction>;
type ThunkAction = (dispatch: UserDispatch) => any;
export type UserDispatch = (action: ThunkAction | PromiseAction | UserAction) => any;