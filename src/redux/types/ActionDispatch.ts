import { Action } from "redux";

export interface ActionInterface extends Action {
   type: string;
   payload: any;
}

type PromiseAction = Promise<ActionInterface>;
type ThunkAction = (dispatch: DispatchType) => any;
export type DispatchType = (action: ThunkAction | PromiseAction | ActionInterface) => any;
