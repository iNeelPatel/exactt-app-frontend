import { OrganizationDispatch, OrganizationActionType } from "../types/OrganizationTypes";
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

export function setOrganization(data: SetOrganization) {
   return async (dispatch: OrganizationDispatch): Promise<any> => {
      const formData = {
         name: data.name,
         prefix: data.prefix,
         email: data.email,
         gst: data.gst,
         logo: data.logo,
         address: {
            line1: data.line1,
            line2: data.line2,
            state: data.state,
            city: data.city,
            zip: data.zip,
         },
         contact: {
            name: data.contact_peron,
            phone: data.phone,
            email: data.email,
         },
         bank: {
            name: data.bank_name,
            acc_name: data.acc_name,
            acc_number: data.acc_no,
            branch: data.branch,
            ifsc: data.ifsc,
         },
      };
      console.log(formData);

      try {
         let res = await Parse.Cloud.run("setOrganization", formData);
         dispatch({
            type: OrganizationActionType.SET_ORGANIZATION,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
