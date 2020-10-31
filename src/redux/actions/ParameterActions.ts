import { DispatchType } from "../types/ActionDispatch";
import { Parameter } from "../types/Parameter";
import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getParameters() {
   return async (dispatch: DispatchType): Promise<Parameter[]> => {
      try {
         let res = await Parse.Cloud.run("getParameters");
         let parameters = res.map((pamameter: any) => ({
            ...pamameter,
            department: pamameter.department.toJSON(),
         }));
         dispatch({
            type: ActionsTypes.GET_PARAMETERS,
            payload: parameters,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function getParameter(objectId: string) {
   return async (dispatch: DispatchType): Promise<Parameter> => {
      try {
         let res = await Parse.Cloud.run("getParameter", { objectId });
         let parameter = {
            ...res,
            department: res.department.toJSON(),
         };
         dispatch({
            type: ActionsTypes.GET_PARAMETER,
            payload: parameter,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function createParameter(request: Parameter) {
   return async (dispatch: DispatchType): Promise<Parameter> => {
      try {
         let fromData = {
            name: request.name,
            unit: request.unit,
            method: request.method,
            department: request.department,
         };
         let res = await Parse.Cloud.run("createParameter", fromData);
         dispatch({
            type: ActionsTypes.CREATE_PARAMETER,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Parameter created successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error);
         return error;
      }
   };
}

export function updateParameter(request: Parameter) {
   return async (dispatch: DispatchType): Promise<Parameter> => {
      try {
         let fromData = {
            objectId: request.objectId,
            name: request.name,
            unit: request.unit,
            method: request.method,
            department: request.department,
         };
         let res = await Parse.Cloud.run("updateParameter", fromData);
         dispatch({
            type: ActionsTypes.CREATE_PARAMETER,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Parameter updated successfully.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error);
         return error;
      }
   };
}
