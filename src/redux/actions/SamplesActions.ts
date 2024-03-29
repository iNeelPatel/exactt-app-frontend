import { DispatchType } from "../types/ActionDispatch";
import { Sample, SampleResultParameters } from "../types/SampleTypes";
import AlertBox from "./Alert";
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

export function createSample(sampleDetails: Object) {
   return async (dispatch: DispatchType): Promise<Sample[]> => {
      try {
         let res = await Parse.Cloud.run("createSample", sampleDetails);
         dispatch({
            type: ActionsTypes.CREATE_SAMPLE,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Sample added successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error.message);
         throw new Error(error);
      }
   };
}

export function getSample(sampleId: string) {
   return async (dispatch: DispatchType): Promise<Sample[]> => {
      try {
         let res = await Parse.Cloud.run("getSample", { sampleId });
         let hod = res?.collection_by?.toJSON();
         let collection_by = res?.collection_by?.toJSON();
         let test_group = res?.test_group?.toJSON();
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

export function assignSample(data: SampleResultParameters[], sampleId: string) {
   return async (dispatch: DispatchType): Promise<Sample[]> => {
      try {
         let res = await Parse.Cloud.run("assignSample", { parameters: data, sampleId });
         dispatch({
            type: ActionsTypes.SAMPLE_ASSIGN,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Sample assign successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error.message);
         return error;
      }
   };
}

export function addResults(data: any) {
   return async (dispatch: DispatchType): Promise<Sample[]> => {
      try {
         let res = await Parse.Cloud.run("addResults", data);
         dispatch({
            type: ActionsTypes.SAMPLE_ASSIGN,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Result added successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error.message);
         return error;
      }
   };
}
