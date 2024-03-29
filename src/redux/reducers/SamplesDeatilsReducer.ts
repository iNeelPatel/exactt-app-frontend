import { SampleDetailsState } from "../types/SampleDetailsTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: SampleDetailsState = {
   samplesDetails: [],
   sampleDetails: undefined,
   searchedSamplesDetails: [],
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

      case ActionTypes.SEARCH_SAMPLE_DETAILS:
         return {
            ...state,
            searchedSamplesDetails: action.payload,
         };

      case ActionTypes.DELETE_SAMPLE_DETAILS:
         return {
            ...state,
            samplesDetails: state.samplesDetails.filter((item: any) => item.objectId !== action.payload.objectId),
         };

      default:
         return state;
   }
};
