import { DispatchType } from "../types/ActionDispatch";
import { Customer } from "../types/CustomerTypes";
import AlertBox from "./Alert";
import ActionsTypes from ".";

import Parse from "parse";

export function getCustomers() {
   return async (dispatch: DispatchType): Promise<any> => {
      try {
         let res = await Parse.Cloud.run("getCustomers");
         dispatch({
            type: ActionsTypes.GET_CUSTOMERS,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}

export function createCustomers(data: any) {
   return async (dispatch: DispatchType): Promise<any> => {
      try {
         let formData: Customer = {
            name: data.name,
            email: data.email,
            address: {
               line1: data.line1,
               line2: data.line2,
               city: data.city.value,
               zip: data.zip,
               state: data.state.value,
            },
            bank: {
               acc_name: data.acc_name,
               acc_number: data.acc_number,
               branch: data.branch,
               ifsc: data.ifsc,
               name: data.bankname,
            },
            contact: {
               name: data.personName,
               phone: data.phone,
               email: data.email,
            },
            gst: data.gst,
         };
         let res = await Parse.Cloud.run("createCustomer", formData);
         dispatch({
            type: ActionsTypes.CREATE_CUSTOMERS,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "Customer created successfully.");
         return res;
      } catch (error) {
         return error;
      }
   };
}