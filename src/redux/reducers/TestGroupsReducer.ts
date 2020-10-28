import { TestGroupState } from "../types/TestGroups";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: TestGroupState = {
   testGroups: undefined,
};

export default (state: TestGroupState = initialState, action: ActionInterface): TestGroupState => {
   switch (action.type) {
      case ActionTypes.GET_STATUS:
         return {
            ...state,
            testGroups: action.payload,
         };
      default:
         return state;
   }
};
