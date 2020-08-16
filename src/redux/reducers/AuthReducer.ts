import { AuthState, AuthAction, AuthActionType } from "../types/AuthTypes";

const initialState: AuthState = {
   status: 0,
};

export default (state: AuthState = initialState, action: AuthAction): AuthState => {
   switch (action.type) {
      case AuthActionType.GET_STATUS:
         return {
            ...state,
            status: action.payload,
         };
      default:
         return state;
   }
};
