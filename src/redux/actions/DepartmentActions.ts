import { DispatchType } from "../types/ActionDispatch";
import { Departments } from "../types/DepartmentTypes";
import ActionsTypes from ".";

import Parse from "parse";

export function getDepartments() {
   return async (dispatch: DispatchType): Promise<Array<Departments>> => {
      try {
         const res = await Parse.Cloud.run("getDepartments");
         dispatch({
            type: ActionsTypes.GET_DEPARTMENTS,
            payload: res,
         });
         return res;
      } catch (error) {
         throw new Error(error);
      }
   };
}

export function createDepartment(data: object) {
   return async (dispatch: DispatchType): Promise<any> => {
      try {
         const res = await Parse.Cloud.run("createDepartment", data);
         dispatch({
            type: ActionsTypes.CREATE_DEPARTMENT,
            payload: res,
         });
         return res;
      } catch (error) {
         console.log(error);
         throw new Error(error);
      }
   };
}

export function updateDepartment(data: object) {
   return async (dispatch: DispatchType): Promise<any> => {
      try {
         const res = await Parse.Cloud.run("updateDepartment", data);
         dispatch({
            type: ActionsTypes.UPDATE_DEPARTMENT,
            payload: res,
         });
         return res;
      } catch (error) {
         console.log(error);
         throw new Error(error);
      }
   };
}
