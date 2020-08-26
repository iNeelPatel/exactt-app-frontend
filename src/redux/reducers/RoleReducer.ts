import { RoleState, RoleAction, RoleActionType } from "../types/RoleTypes";

const initialState: RoleState = {
   access: {},
};

export default (state: RoleState = initialState, action: RoleAction): RoleState => {
   switch (action.type) {
      case RoleActionType.GET_ROLE_ACCESS:
         return {
            ...state,
            access: action.payload,
         };

      default:
         return state;
   }
};
