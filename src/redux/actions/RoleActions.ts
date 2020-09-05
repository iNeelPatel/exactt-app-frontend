import { DispatchType } from "../types/ActionDispatch";
import AlertBox from "./Alert";
import ActionsTypes from ".";
import Parse from "parse";

export function getRoleAccessPermission() {
   return async (dispatch: DispatchType): Promise<any> => {
      try {
         let res = await Parse.Cloud.run("getRoleAccessPermission");
         dispatch({
            type: ActionsTypes.GET_ROLE_ACCESS,
            payload: res,
         });
         return res;
      } catch (error) {
         throw error;
      }
   };
}

export function updateRole(data: object) {
   return async (dispatch: DispatchType): Promise<object> => {
      try {
         let res = await Parse.Cloud.run("updateRole", data);
         dispatch({
            type: ActionsTypes.UPDATE_ROLE,
            payload: res.permission,
         });
         return res;
      } catch (error) {
         throw error;
      }
   };
}

export function createRole(data: object) {
   return async (dispatch: DispatchType): Promise<object> => {
      try {
         let res = await Parse.Cloud.run("createRole", data);
         dispatch({
            type: ActionsTypes.CREATE_ROLE,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Role created successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error.message);
         throw new Error(error);
      }
   };
}

export function getAccessRoleList() {
   return async (dispatch: DispatchType): Promise<object> => {
      try {
         let res = await Parse.Cloud.run("getAvailableRoles");
         dispatch({
            type: ActionsTypes.GET_ACCESS_ROLES_LIST,
            payload: res,
         });
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error.message);
         throw new Error(error);
      }
   };
}
