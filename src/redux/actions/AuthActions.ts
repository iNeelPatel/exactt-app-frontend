import { DispatchType } from "../types/ActionDispatch";
import ActionsTypes from ".";

import Parse from "parse";

export function getStatus() {
   return async (dispatch: DispatchType): Promise<number> => {
      try {
         let res = await Parse.Cloud.run("getOrganizationStatus");
         dispatch({
            type: ActionsTypes.GET_STATUS,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
