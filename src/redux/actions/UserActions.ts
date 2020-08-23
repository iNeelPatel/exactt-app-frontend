import { UserDispatch, UserActionType } from "../types/UserTypes";
import Parse from "parse";

interface Signup {
   username: string;
   name: string;
   phone: string;
   email: string;
   password: string;
}

export function login(username: string, password: string) {
   return async (dispatch: UserDispatch): Promise<object> => {
      try {
         let user = await Parse.User.logIn(username, password);
         dispatch({
            type: UserActionType.LOGIN,
            payload: user,
         });
         return user;
      } catch (error) {
         return { error };
      }
   };
}

export function signup(data: Signup) {
   return async (dispatch: UserDispatch): Promise<void> => {
      await Parse.User.signUp(data.username, data.password, {
         name: data.name,
         phone: parseInt(data.phone),
         email: data.email,
         role: "admin",
      }).then((user) => {
         dispatch({
            type: UserActionType.SIGNUP,
            payload: user,
         });
      });
   };
}

export function logout() {
   return async (dispatch: UserDispatch): Promise<void> => {
      try {
         await Parse.User.logOut();
         dispatch({
            type: UserActionType.LOGOUT,
            payload: null,
         });
      } catch (error) {
         return error;
      }
   };
}
