import { DispatchType } from "../types/ActionDispatch";
import { SampleGroup } from "../types/SampleGroupTypes";
// import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getSampleGroup() {
   return async (dispatch: DispatchType): Promise<SampleGroup[]> => {
      try {
         let res = await Parse.Cloud.run("getSampleGroups");
         let sampleGroups = res.map((sampleGroup: any) => {
            let parameters = sampleGroup.parameters.map((parameter: any) => ({
               ...parameter,
               parameter: parameter.parameter.toJSON(),
            }));
            return { ...sampleGroup, parameters };
         });
         dispatch({
            type: ActionsTypes.GET_SAMPLE_GROUP,
            payload: sampleGroups,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
