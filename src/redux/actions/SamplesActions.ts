import { DispatchType } from "../types/ActionDispatch";
import { Sample } from "../types/SampleTypes";
// import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getSamples() {
   return async (dispatch: DispatchType): Promise<Sample[]> => {
      try {
         let res = await Parse.Cloud.run("getSamples");
         dispatch({
            type: ActionsTypes.GET_SAMPLES,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
