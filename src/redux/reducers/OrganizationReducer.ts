import { OrganizationState } from "../types/OrganizationTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: OrganizationState = {
   details: {},
};

export default (state: OrganizationState = initialState, action: ActionInterface): OrganizationState => {
   switch (action.type) {
      case ActionTypes.SET_ORGANIZATION:
         return {
            ...state,
            details: action.payload,
         };

      case ActionTypes.GET_ORGANIZATION:
         return {
            ...state,
            details: action.payload,
         };

      default:
         return state;
   }
};
