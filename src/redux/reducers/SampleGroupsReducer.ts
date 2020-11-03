import { SampleGroupState } from "../types/SampleGroupTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: SampleGroupState = {
   sampleGroups: [],
   sampleGroup: undefined,
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

      default:
         return state;
   }
};
