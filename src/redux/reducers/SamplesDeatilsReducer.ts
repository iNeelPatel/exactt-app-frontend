import { SampleDetailsState } from "../types/SampleDetailsTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: SampleDetailsState = {
   samplesDetails: [],
   sampleDetails: undefined,
};

export default (state: SampleDetailsState = initialState, action: ActionInterface): SampleDetailsState => {
   switch (action.type) {
      case ActionTypes.GET_SAMPLES_DETAILS:
         return {
            ...state,
            samplesDetails: action.payload,
         };

      case ActionTypes.CREATE_SAMPLE_DETAILS:
         return {
            ...state,
            sampleDetails: action.payload,
         };

      case ActionTypes.GET_SAMPLE_DETAILS:
         return {
            ...state,
            sampleDetails: action.payload,
         };

      case ActionTypes.UPDATE_SAMPLE_DETAILS:
         return {
            ...state,
            sampleDetails: action.payload,
         };

      default:
         return state;
   }
};
