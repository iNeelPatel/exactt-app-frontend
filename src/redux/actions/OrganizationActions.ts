import { OrganizationDispatch, OrganizationActionType } from "../types/OrganizationTypes";
import Parse from "parse";

interface SetOrganization {
   acc_no: string;
   bank_name: string;
   branch: string;
   city: object;
   contact_peron: string;
   gst: string;
   ifsc: string;
   line1: string;
   line2: string;
   name: string;
   perfix: string;
   phone: string;
   state: string;
   zip: string;
}

export function setOrganization(formData: SetOrganization) {
   return async (dispatch: OrganizationDispatch): Promise<void> => {
      try {
         let res = await Parse.Cloud.run("", formData);
         dispatch({
            type: OrganizationActionType.SET_ORGANIZATION,
            payload: res,
         });
      } catch (err) {
         dispatch({
            type: OrganizationActionType.SET_ORGANIZATION,
            payload: { error: err }
         });
      }
   };
}
