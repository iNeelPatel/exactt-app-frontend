import { Action } from "redux";

interface OrganizationActionTypeInterface {
   SET_ORGANIZATION: string;
}

export const OrganizationActionType: OrganizationActionTypeInterface = {
   SET_ORGANIZATION: "SET_ORGANIZATION",
};

export interface OrganizationAction extends Action {
   type: string;
   payload: any;
}

export interface OrganizationState {
   details: any;
}

type PromiseAction = Promise<OrganizationAction>;
type ThunkAction = (dispatch: OrganizationDispatch) => any;
export type OrganizationDispatch = (action: ThunkAction | PromiseAction | OrganizationAction) => any;
