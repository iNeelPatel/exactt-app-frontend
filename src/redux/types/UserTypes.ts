import { Action } from "redux";

interface UserActionTypeInterface {
   LOGIN: string;
}

export const UserActionType: UserActionTypeInterface = {
   LOGIN: "LOGIN",
};

export interface UserAction extends Action {
   type: string;
   payload: Object;
}

export interface UserState {
   user: any;
}
