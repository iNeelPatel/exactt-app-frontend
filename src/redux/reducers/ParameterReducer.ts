import { ParameterState } from "../types/Parameter";
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

      default:
         return state;
   }
};
