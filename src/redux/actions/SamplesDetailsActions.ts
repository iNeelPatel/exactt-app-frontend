import { DispatchType } from "../types/ActionDispatch";
import { SampleDetails } from "../types/SampleDetailsTypes";
import AlertBox from "./Alert";
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

export function searchSamplesDetails(keyword: string) {
   return async (dispatch: DispatchType): Promise<SampleDetails[]> => {
      try {
         let res = await Parse.Cloud.run("searchSampleDetails", { keyword });
         dispatch({
            type: ActionsTypes.SEARCH_SAMPLE_DETAILS,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function createSampleDetails(data: SampleDetails) {
   return async (dispatch: DispatchType): Promise<SampleDetails[]> => {
      try {
         let fromData = {
            name: data.name,
            genericName: data.genericName,
            sampleGroups: data.sampleGroups,
         };
         let res = await Parse.Cloud.run("createSampleDetail", fromData);

         dispatch({
            type: ActionsTypes.CREATE_SAMPLE_DETAILS,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Sample details add successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", "error");
         return error;
      }
   };
}

export function updateSampleDetails(data: SampleDetails) {
   return async (dispatch: DispatchType): Promise<SampleDetails[]> => {
      try {
         let fromData = {
            objectId: data.objectId,
            name: data.name,
            genericName: data.genericName,
            sampleGroups: data.sampleGroups,
         };
         let res = await Parse.Cloud.run("updateSampleDetail", fromData);

         dispatch({
            type: ActionsTypes.UPDATE_SAMPLE_DETAILS,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Sample details update successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", "error");
         return error;
      }
   };
}

export function getSampleDetails(objectId: string) {
   return async (dispatch: DispatchType): Promise<SampleDetails[]> => {
      try {
         let res = await Parse.Cloud.run("getSampleDetail", { objectId });
         dispatch({
            type: ActionsTypes.GET_SAMPLE_DETAILS,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
