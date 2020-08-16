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
   return (dispatch: UserDispatch): void => {
      console.log("here");
      Parse.User.logIn(username, password).then((user) => {
         dispatch({
            type: UserActionType.LOGIN,
            payload: user,
         });
      });
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
