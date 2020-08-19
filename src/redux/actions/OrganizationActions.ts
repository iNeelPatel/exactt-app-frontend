import { OrganizationDispatch, OrganizationActionType } from "../types/OrganizationTypes";
import Parse from "parse";

interface SetOrganization {
   acc_no: string;
   bank_name: string;
   acc_name: string;
   branch: string;
   city: any;
   contact_peron: string;
   email: string;
   gst: string;
   ifsc: string;
   line1: string;
   line2: string;
   name: string;
   perfix: string;
   phone: string;
   state: any;
   zip: string;
   logo: File;
}

export function setOrganization(data: SetOrganization) {
   return async (dispatch: OrganizationDispatch): Promise<any> => {
      try {
         let res = await Parse.Cloud.run("setOrganization", data);
         dispatch({
            type: OrganizationActionType.SET_ORGANIZATION,
            payload: res,
         });
         console.log(res);
         return res;
      } catch (error) {
         console.log(error);
         return error;
      }
   };
}
