import { RoleDispatch, RoleActionType } from "../types/RoleTypes";
import Parse from "parse";

export function getRoleAccessPermission() {
   return async (dispatch: RoleDispatch): Promise<any> => {
      try {
         let res = await Parse.Cloud.run("getRoleAccessPermission");
         dispatch({
            type: RoleActionType.GET_ROLE_ACCESS,
            payload: res,
         });
         return res;
      } catch (error) {
         throw error;
      }
   };
}

export function updateRole(data: object) {
   return async (dispatch: RoleDispatch): Promise<object> => {
      try {
         let res = await Parse.Cloud.run("updateRole", data);
         dispatch({
            type: RoleActionType.UPDATE_ROLE,
            payload: res.permission,
         });
         return res;
      } catch (error) {
         throw error;
      }
   };
}
