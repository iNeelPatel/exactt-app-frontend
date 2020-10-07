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

      case ActionTypes.CREATE_CUSTOMER:
         return {
            ...state,
            customer: action.payload,
         };

      case ActionTypes.GET_CUSTOMER:
         return {
            ...state,
            customer: action.payload,
         };

      case ActionTypes.UPDATE_CUSTOMER:
         return {
            ...state,
            customer: action.payload,
         };
      case ActionTypes.DELETE_CUSTOMER:
         return {
            ...state,
            customers: state.customers.filter(item => item.objectId !== action.payload.objectId),
         };

      default:
         return state;
   }
};
