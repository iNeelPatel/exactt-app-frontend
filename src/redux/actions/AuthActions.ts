import { AuthDispatch, AuthActionType } from "../types/AuthTypes";
import Parse from "parse";

export function getStatus() {
   return async (dispatch: AuthDispatch): Promise<void> => {
      await Parse.Cloud.run("getOrganizationStatus").then((res) => {
         dispatch({
            type: AuthActionType.GET_STATUS,
            payload: res,
         });
      });
   };
}
