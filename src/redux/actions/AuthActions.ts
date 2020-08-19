import { AuthDispatch, AuthActionType } from "../types/AuthTypes";
import Parse from "parse";

export function getStatus() {
   return async (dispatch: AuthDispatch): Promise<any> => {
      try {
         let res = await Parse.Cloud.run("getOrganizationStatus");
         dispatch({
            type: AuthActionType.GET_STATUS,
            payload: res,
         });
         return res;
      } catch (error) {
         return { error };
      }
   };
}
