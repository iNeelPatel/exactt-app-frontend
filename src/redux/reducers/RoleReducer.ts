import { RoleState } from "../types/RoleTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: RoleState = {
   access: {},
   updateRole: {},
   rolesList: [],
};

export default (state: RoleState = initialState, action: ActionInterface): RoleState => {
   switch (action.type) {
      case ActionTypes.GET_ROLE_ACCESS:
         return {
            ...state,
            access: action.payload,
         };

      case ActionTypes.UPDATE_ROLE:
         return {
            ...state,
            updateRole: action.payload,
         };

      case ActionTypes.CREATE_ROLE:
         return {
            ...state,
            access: { ...state.access, ...action.payload },
         };

      case ActionTypes.GET_ACCESS_ROLES_LIST:
         return {
            ...state,
            rolesList: action.payload,
         };

      default:
         return state;
   }
};
