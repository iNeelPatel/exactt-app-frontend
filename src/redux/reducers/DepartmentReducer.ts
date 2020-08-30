import { DepartmentState } from "../types/DepartmentTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: DepartmentState = {
   departments: [],
};

export default (state: DepartmentState = initialState, action: ActionInterface): DepartmentState => {
   switch (action.type) {
      case ActionTypes.GET_DEPARTMENTS:
         return {
            ...state,
            departments: action.payload,
         };

      case ActionTypes.CREATE_DEPARTMENT:
         return {
            ...state,
            departments: [...state.departments, action.payload],
         };

      case ActionTypes.UPDATE_DEPARTMENT:
         return {
            ...state,
            departments: state.departments.map((item) => (item.objectId === action.payload.objectId ? action.payload : item)),
         };

      default:
         return state;
   }
};
