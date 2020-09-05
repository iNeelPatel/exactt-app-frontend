import { UserState } from "../types/UserTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: UserState = {
   user: null,
   createUser: null,
};

export default (state: UserState = initialState, action: ActionInterface): UserState => {
   switch (action.type) {
      case ActionTypes.LOGIN:
         return {
            ...state,
            user: action.payload,
         };

      case ActionTypes.SIGNUP:
         return {
            ...state,
            user: action.payload,
         };

      case ActionTypes.LOGOUT:
         return {
            ...state,
            user: action.payload,
         };

      case ActionTypes.CREATE_USER:
         return {
            ...state,
            user: action.payload,
         };

      default:
         return state;
   }
};
