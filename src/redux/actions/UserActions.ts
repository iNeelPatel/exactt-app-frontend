import { UserAction, UserActionType } from "../types/UserTypes";

interface Login {
   data: {
      username: string;
      password: string;
   };
}

export function login(data: Login): UserAction {
   return {
      type: UserActionType.LOGIN,
      payload: {},
   };
}

interface Signup {
   data: {
      username: string;
      name: string;
      phone: number;
      address: {
         line1: string;
         line2: string;
         state: string;
         city: string;
         zip: number;
      };
      role: string;
      password: string;
   };
}

export function signup(data: Signup): UserAction {
   return {
      type: UserActionType.LOGIN,
      payload: {},
   };
}
