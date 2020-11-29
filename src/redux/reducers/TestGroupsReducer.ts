import { TestGroupState } from "../types/TestGroupsTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: TestGroupState = {
   testGroups: [],
   testGroup: undefined,
   searchedTestGroups: [],
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

      case ActionTypes.SEARCH_TEST_GROUP:
         return {
            ...state,
            searchedTestGroups: action.payload,
         };

      case ActionTypes.DELETE_TEST_GROUP:
         return {
            ...state,
            testGroups: state.testGroups.filter((item: any) => item.objectId !== action.payload.objectId),
         };

      default:
         return state;
   }
};
