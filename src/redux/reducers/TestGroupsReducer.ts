import { TestGroupState } from "../types/TestGroups";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: TestGroupState = {
   testGroups: [],
   testGroup: undefined,
};

export default (state: TestGroupState = initialState, action: ActionInterface): TestGroupState => {
   switch (action.type) {
      case ActionTypes.GET_TEST_GROUPS:
         return {
            ...state,
            testGroups: action.payload,
         };

      case ActionTypes.CREATE_TEST_GROUPS:
         return {
            ...state,
            testGroup: action.payload,
         };

      case ActionTypes.GET_TEST_GROUP:
         return {
            ...state,
            testGroup: action.payload,
         };

      case ActionTypes.UPDATE_TEST_GROUP:
         return {
            ...state,
            testGroup: action.payload,
         };

      default:
         return state;
   }
};
