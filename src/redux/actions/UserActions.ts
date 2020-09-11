import { DispatchType } from "../types/ActionDispatch";
import ActionsTypes from ".";
import Parse from "parse";
import AlertBox from "./Alert";

interface Signup {
   username: string;
   name: string;
   phone: string;
   email: string;
   password: string;
}

export function login(username: string, password: string) {
   return async (dispatch: DispatchType): Promise<object> => {
      try {
         let user = await Parse.User.logIn(username, password);
         dispatch({
            type: ActionsTypes.LOGIN,
            payload: user.attributes,
         });
         return user;
      } catch (error) {
         return { error };
      }
   };
}

export function signup(data: Signup) {
   return async (dispatch: DispatchType): Promise<void> => {
      try {
         let formData = {
            username: data.username,
            password: data.password,
            phone: data.phone,
            name: data.name,
            email: data.email,
         };
         let res = await Parse.Cloud.run("createAdminUser", formData);
         dispatch({
            type: ActionsTypes.SIGNUP,
            payload: res,
         });
         return res;
      } catch (error) {
         throw error;
      }
   };
}

export function getProfile() {
   return async (dispatch: DispatchType): Promise<void> => {
      let user: any = Parse.User.current();

      try {
         let formData = {
            objectId: user.id,
         };
         let res = await Parse.Cloud.run("getUser", formData);
         dispatch({
            type: ActionsTypes.GET_PROFILE,
            payload: { ...res, role: res?.role?.toJSON(), department: res.department ? res?.department?.toJSON() : { name: "Admin" } },
         });
         return res;
      } catch (error) {
         throw error;
      }
   };
}

export function logout() {
   return async (dispatch: DispatchType): Promise<void> => {
      try {
         await Parse.User.logOut();
         dispatch({
            type: ActionsTypes.LOGOUT,
            payload: null,
         });
      } catch (error) {
         return error;
      }
   };
}

export function createUser(data: any) {
   return async (dispatch: DispatchType): Promise<void> => {
      try {
         let formData = {
            username: data.username,
            name: data.name,
            email: data.email,
            phone: data.countryCode.value + data.phone,
            roleId: data.role.value,
            departmentId: data.department.value,
         };
         let res = await Parse.Cloud.run("createUser", formData);
         dispatch({
            type: ActionsTypes.CREATE_USER,
            payload: res,
         });
         AlertBox(dispatch, "confirmation", "User created successfully. Password will be mailed to users email address.");
         return res;
      } catch (error) {
         AlertBox(dispatch, "error", error.message);
         throw error;
      }
   };
}
