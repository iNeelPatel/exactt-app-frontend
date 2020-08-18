import { OrganizationState, OrganizationAction, OrganizationActionType } from "../types/OrganizationTypes";

const initialState: OrganizationState = {
   details: null,
};

export default (state: OrganizationState = initialState, action: OrganizationAction): OrganizationState => {
   switch (action.type) {
      case OrganizationActionType.SET_ORGANIZATION:
         return {
            ...state,
            details: action.payload,
         };

      default:
         return state;
   }
};
