import { UserDispatch, UserActionType } from "../types/UserTypes";
import Parse from "parse";

interface Login {
   data: {
      username: string;
      password: string;
   };
}

interface Signup {
   username: string;
   name: string;
   phone: string;
   email: string;
   password: string;
}

export function login(data: Login) {
   return {
      type: UserActionType.LOGIN,
      payload: {},
   };
}

export function signup(data: Signup) {
   return (dispatch: UserDispatch): void => {
      console.log("here");
      Parse.User.signUp(data.username, data.password, {
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
