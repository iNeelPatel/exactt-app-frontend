import { DispatchType } from "../types/ActionDispatch";
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
         dispatch({
            type: ActionsTypes.ALERT_SHOW,
            payload: {
               appearance: "confirmation",
               body: "Role created successfully.",
            },
         });
         setTimeout(() => {
            dispatch({
               type: ActionsTypes.ALERT_HIDE,
               payload: {},
            });
         }, 3000);
         return res;
      } catch (error) {
         dispatch({
            type: ActionsTypes.ALERT_SHOW,
            payload: {
               title: "Add new role",
               appearance: "error",
               body: error.message,
            },
         });
         setTimeout(() => {
            dispatch({
               type: ActionsTypes.ALERT_HIDE,
               payload: {},
            });
         }, 3000);
         throw new Error(error);
      }
   };
}
