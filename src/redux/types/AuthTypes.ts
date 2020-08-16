import { Action } from "redux";

interface AuthActionTypeInterface {
   GET_STATUS: string;
}

export const AuthActionType: AuthActionTypeInterface = {
   GET_STATUS: "GET_STATUS",
};

export interface AuthAction extends Action {
   type: string;
   payload: any;
}

export interface AuthState {
   status: number;
}

type PromiseAction = Promise<AuthAction>;
type ThunkAction = (dispatch: AuthDispatch) => any;
export type AuthDispatch = (action: ThunkAction | PromiseAction | AuthAction) => any;
