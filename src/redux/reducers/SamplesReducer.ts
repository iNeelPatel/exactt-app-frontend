import { SampleState } from "../types/SampleTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: SampleState = {
   samples: [],
   sample: undefined,
   searchedSample: [],
   sampleAssign: [],
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

      case ActionTypes.CREATE_SAMPLE:
         return {
            ...state,
            sample: action.payload,
         };

      case ActionTypes.SAMPLE_ASSIGN:
         return {
            ...state,
            sampleAssign: action.payload,
         };

      default:
         return state;
   }
};
