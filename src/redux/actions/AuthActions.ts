import { AuthDispatch, AuthActionType } from "../types/AuthTypes";
import Parse from "parse";

export function getStatus() {
   return async (dispatch: AuthDispatch): Promise<void> => {
      try {
         let res = await Parse.Cloud.run("getOrganizationStatus");
         dispatch({
            type: AuthActionType.GET_STATUS,
            payload: res,
         });
      } catch (err) {
         dispatch({
            type: AuthActionType.GET_STATUS,
            payload: { error: err },
         });
      }
   };
}
