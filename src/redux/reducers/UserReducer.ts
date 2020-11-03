import { UserState } from "../types/UserTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: UserState = {
   user: null,
   createUser: null,
   userData: null,
   users: null,
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
            createUser: action.payload,
         };

      case ActionTypes.GET_PROFILE:
         return {
            ...state,
            user: action.payload,
         };

      case ActionTypes.GET_USER:
         return {
            ...state,
            userData: action.payload,
         };

      case ActionTypes.GET_USERS:
         return {
            ...state,
            users: action.payload,
         };

      case ActionTypes.UPDATE_USER:
         return {
            ...state,
            userData: action.payload,
         };

      case ActionTypes.DELETE_USERS:
         return {
            ...state,
            user: state.user.filter((item: any) => item.objectId !== action.payload.objectId),
         };

      default:
         return state;
   }
};
