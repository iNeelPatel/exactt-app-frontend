import { SampleGroupState } from "../types/SampleGroupTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: SampleGroupState = {
   sampleGroups: [],
   sampleGroup: undefined,
   searchSampleGroup: [],
};

export default (state: SampleGroupState = initialState, action: ActionInterface): SampleGroupState => {
   switch (action.type) {
      case ActionTypes.GET_SAMPLE_GROUPS:
         return {
            ...state,
            sampleGroups: action.payload,
         };

      case ActionTypes.CREATE_SAMPLE_GROUP:
         return {
            ...state,
            sampleGroup: action.payload,
         };

      case ActionTypes.GET_SAMPLE_GROUP:
         return {
            ...state,
            sampleGroup: action.payload,
         };

      case ActionTypes.UPDATE_SAMPLE_GROUP:
         return {
            ...state,
            sampleGroup: action.payload,
         };

      case ActionTypes.SEARCH_SAMPLE_GROUP:
         return {
            ...state,
            searchSampleGroup: action.payload,
         };
      case ActionTypes.DELETE_SAMPLE_GROUP:
         return {
            ...state,
            sampleGroups: state.sampleGroups.filter((item: any) => item.objectId !== action.payload.objectId),
         };

      default:
         return state;
   }
};
