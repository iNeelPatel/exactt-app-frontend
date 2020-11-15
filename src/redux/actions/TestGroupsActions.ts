import { DispatchType } from "../types/ActionDispatch";
import { TestGroup } from "../types/TestGroupsTypes";
import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getTestGroups() {
   return async (dispatch: DispatchType): Promise<TestGroup[]> => {
      try {
         let res = await Parse.Cloud.run("getTestGroups");
         dispatch({
            type: ActionsTypes.GET_TEST_GROUPS,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function searchTestGroups(keyword: string) {
   return async (dispatch: DispatchType): Promise<TestGroup[]> => {
      try {
         let res = await Parse.Cloud.run("searchTestGroups", { keyword });
         dispatch({
            type: ActionsTypes.SEARCH_TEST_GROUP,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function createTestGroup(request: TestGroup) {
   return async (dispatch: DispatchType): Promise<TestGroup> => {
      try {
         let fromData = {
            name: request.name,
            code: request.code,
            custom_field: request.custom_field,
         };
         let res = await Parse.Cloud.run("createTestGroup", fromData);
         dispatch({
            type: ActionsTypes.CREATE_TEST_GROUPS,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Test group created successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error);
         return error;
      }
   };
}

export function getTestGroup(id: string) {
   return async (dispatch: DispatchType): Promise<TestGroup> => {
      try {
         let res = await Parse.Cloud.run("getTestGroup", { objectId: id });
         dispatch({
            type: ActionsTypes.GET_TEST_GROUP,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function updateTestGroup(request: TestGroup) {
   return async (dispatch: DispatchType): Promise<TestGroup> => {
      try {
         let fromData = {
            objectId: request.objectId,
            name: request.name,
            code: request.code,
            custom_field: request.custom_field,
         };
         let res = await Parse.Cloud.run("updateTestGroup", fromData);
         dispatch({
            type: ActionsTypes.UPDATE_TEST_GROUP,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Test group update successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error);
         return error;
      }
   };
}
