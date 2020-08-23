import { UserState, UserAction, UserActionType } from "../types/UserTypes";

const initialState: UserState = {
   user: null,
};

export default (state: UserState = initialState, action: UserAction): UserState => {
   switch (action.type) {
      case UserActionType.LOGIN:
         return {
            ...state,
            user: action.payload,
         };

      case UserActionType.SIGNUP:
         return {
            ...state,
            user: action.payload,
         };

      case UserActionType.LOGOUT:
         return {
            ...state,
            user: action.payload,
         };

      default:
         return state;
   }
};
