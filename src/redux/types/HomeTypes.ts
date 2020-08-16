import { Action } from "redux";

interface HomeActionTypeInterface {
   HOME: string;
}

export const HomeActionType: HomeActionTypeInterface = {
   HOME: "HOME",
};

export interface HomeAction extends Action {
   type: string;
   payload: any;
}

export interface HomeState {
   home: string;
   user: {
      name: string;
   };
}
