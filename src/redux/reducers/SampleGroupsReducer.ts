import { SampleGroupState } from "../types/SampleGroupTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: SampleGroupState = {
   sampleGroups: [],
   sampleGroup: undefined,
};

export default (state: SampleGroupState = initialState, action: ActionInterface): SampleGroupState => {
   switch (action.type) {
      case ActionTypes.GET_SAMPLE_GROUP:
         return {
            ...state,
            sampleGroups: action.payload,
         };

      default:
         return state;
   }
};
