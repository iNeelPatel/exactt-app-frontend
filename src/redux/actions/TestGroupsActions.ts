import { DispatchType } from "../types/ActionDispatch";
import { TestGroup } from "../types/TestGroups";
import ActionsTypes from ".";

import Parse from "parse";

export function getTestGroups() {
   return async (dispatch: DispatchType): Promise<TestGroup[]> => {
      try {
         let res = await Parse.Cloud.run("getTestGroups");
         dispatch({
            type: ActionsTypes.GET_TEST_GROUPS,
            payload: res,
         });
         return res;
      } catch (error) {
         return error;
      }
   };
}
