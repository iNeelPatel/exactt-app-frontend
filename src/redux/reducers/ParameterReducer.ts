import { ParameterState } from "../types/ParameterTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: ParameterState = {
   parameters: [],
   parameter: undefined,
};

export default (state: ParameterState = initialState, action: ActionInterface): ParameterState => {
   switch (action.type) {
      case ActionTypes.GET_PARAMETERS:
         return {
            ...state,
            parameters: action.payload,
         };

      case ActionTypes.CREATE_PARAMETER:
         return {
            ...state,
            parameter: action.payload,
         };

      case ActionTypes.UPDATE_PARAMETER:
         return {
            ...state,
            parameter: action.payload,
         };

      case ActionTypes.GET_PARAMETER:
         return {
            ...state,
            parameter: action.payload,
         };

      default:
         return state;
   }
};
