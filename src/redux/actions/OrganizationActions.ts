import { DispatchType } from "../types/ActionDispatch";
import ActionsTypes from ".";
import Parse from "parse";

interface SetOrganization {
   acc_name: string;
   acc_no: string;
   bank_name: string;
   branch: string;
   city: any;
   contact_peron: string;
   email: string;
   gst: string;
   ifsc: string;
   line1: string;
   line2: string;
   logo: any;
   name: string;
   phone: string;
   prefix: string;
   state: any;
   zip: string;
}

export function setOrganization(data: any) {
   return async (dispatch: DispatchType): Promise<any> => {
      console.log(data);

      try {
         let res = await Parse.Cloud.run("setOrganization", data);
         dispatch({
            type: ActionsTypes.SET_ORGANIZATION,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function getOrganization() {
   return async (dispatch: DispatchType): Promise<any> => {
      try {
         let res = await Parse.Cloud.run("getOrganization");
         dispatch({
            type: ActionsTypes.GET_ORGANIZATION,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
