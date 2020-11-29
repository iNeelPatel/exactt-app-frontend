import { DispatchType } from "../types/ActionDispatch";
import { SampleGroup } from "../types/SampleGroupTypes";
import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getSampleGroups() {
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
            type: ActionsTypes.GET_SAMPLE_GROUPS,
            payload: sampleGroups,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function createSampleGroup(data: any) {
   return async (dispatch: DispatchType): Promise<SampleGroup[]> => {
      try {
         let fromData = {
            name: data.name,
            parameters: data.parameters,
         };
         let res = await Parse.Cloud.run("createSampleGroup", fromData);

         dispatch({
            type: ActionsTypes.CREATE_SAMPLE_GROUP,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Test method created successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", "error");
         return error;
      }
   };
}

export function updateSampleGroup(data: any) {
   return async (dispatch: DispatchType): Promise<SampleGroup[]> => {
      try {
         let fromData = {
            objectId: data.objectId,
            name: data.name,
            parameters: data.parameters,
         };
         let res = await Parse.Cloud.run("updateSampleGroup", fromData);

         dispatch({
            type: ActionsTypes.UPDATE_SAMPLE_GROUP,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Test method created successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", "error");
         return error;
      }
   };
}

export function getSampleGroup(objectId: string) {
   return async (dispatch: DispatchType): Promise<SampleGroup[]> => {
      try {
         let res = await Parse.Cloud.run("getSampleGroup", { objectId });
         let parameters = res.parameters.map((parameter: any) => ({ ...parameter, parameter: parameter.parameter.toJSON() }));
         let updateRes = { ...res, parameters };
         dispatch({
            type: ActionsTypes.GET_SAMPLE_GROUP,
            payload: updateRes,
         });
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", "error");
         return error;
      }
   };
}

export function searchSampleGroup(keyword: string) {
   return async (dispatch: DispatchType): Promise<SampleGroup[]> => {
      try {
         let res = await Parse.Cloud.run("searchSampleGroup", { keyword });
         let sampleGroups = res.map((sampleGroup: any) => {
            let parameters = sampleGroup.parameters.map((parameter: any) => ({
               ...parameter,
               parameter: parameter.parameter.toJSON(),
            }));
            return { ...sampleGroup, parameters };
         });
         dispatch({
            type: ActionsTypes.SEARCH_SAMPLE_GROUP,
            payload: sampleGroups,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function deleteSampleGroup(objectId: string) {
   return async (dispatch: DispatchType): Promise<SampleGroup[]> => {
      try {
         let res = await Parse.Cloud.run("deleteSampleGroup", { objectId });
         dispatch({
            type: ActionsTypes.DELETE_SAMPLE_GROUP,
            payload: res,
         });
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", "error");
         return error;
      }
   };
}
