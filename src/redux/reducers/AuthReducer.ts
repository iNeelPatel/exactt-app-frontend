import { AuthState } from "../types/AuthTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: AuthState = {
   status: 0,
};

export default (state: AuthState = initialState, action: ActionInterface): AuthState => {
   switch (action.type) {
      case ActionTypes.GET_STATUS:
         return {
            ...state,
            status: action.payload,
         };
      default:
         return state;
   }
};
