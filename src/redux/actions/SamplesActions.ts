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

export function getSample(sampleId: string) {
   return async (dispatch: DispatchType): Promise<Sample[]> => {
      try {
         let res = await Parse.Cloud.run("getSample", { sampleId });
         let hod = res.collection_by.toJSON();
         let collection_by = res.collection_by.toJSON();
         let test_group = res.test_group.toJSON();
         let sample = { ...res, hod, collection_by, test_group };
         dispatch({
            type: ActionsTypes.GET_SAMPLE,
            payload: sample,
         });
         return sample;
      } catch (error) {
         return error;
      }
   };
}
