import { DispatchType } from "../types/ActionDispatch";
import { Parameter } from "../types/Parameter";
// import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getParameters() {
   return async (dispatch: DispatchType): Promise<Parameter[]> => {
      try {
         let res = await Parse.Cloud.run("getParameters");
         let parameters = res.map((user: any) => ({
            ...user,
            department: user.department.toJSON(),
         }));
         dispatch({
            type: ActionsTypes.GET_PARAMETERS,
            payload: parameters,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
