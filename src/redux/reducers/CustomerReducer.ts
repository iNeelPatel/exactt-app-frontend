import { CustomerState } from "../types/CustomerTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: CustomerState = {
   customer: {},
   customers: [],
};

export default (state: CustomerState = initialState, action: ActionInterface): CustomerState => {
   switch (action.type) {
      case ActionTypes.GET_CUSTOMERS:
         return {
            ...state,
            customers: action.payload,
         };

      default:
         return state;
   }
};
