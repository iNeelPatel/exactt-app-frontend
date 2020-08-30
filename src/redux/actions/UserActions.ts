import { DispatchType } from "../types/ActionDispatch";
import ActionsTypes from ".";
import Parse from "parse";

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
         console.log(user);
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
            phone: parseInt(data.phone),
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
