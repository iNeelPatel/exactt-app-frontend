import { DispatchType } from "../types/ActionDispatch";
import { SampleDetails } from "../types/SampleDetailsTypes";
// import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getSamplesDetails() {
   return async (dispatch: DispatchType): Promise<SampleDetails[]> => {
      try {
         let res = await Parse.Cloud.run("getSampleDetails");
         dispatch({
            type: ActionsTypes.GET_SAMPLES_DETAILS,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
