import { SampleState } from "../types/SampleTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: SampleState = {
   samples: [],
   sample: {},
   searchedSample: [],
};

export default (state: SampleState = initialState, action: ActionInterface): SampleState => {
   switch (action.type) {
      case ActionTypes.GET_SAMPLES:
         return {
            ...state,
            samples: action.payload,
         };

      case ActionTypes.GET_SAMPLE:
         return {
            ...state,
            sample: action.payload,
         };

      default:
         return state;
   }
};
