import { AlertBoxState } from "../types/AlertBoxTypes";
import { ActionInterface } from "../types/ActionDispatch";
import ActionTypes from "../actions";

const initialState: AlertBoxState = {
   visible: false,
   title: "",
   appearance: "info",
   actions: "",
   body: "",
};

export default (state: AlertBoxState = initialState, action: ActionInterface): AlertBoxState => {
   switch (action.type) {
      case ActionTypes.ALERT_SHOW:
         return {
            ...state,
            visible: true,
            title: action.payload.title,
            appearance: action.payload.appearance,
            actions: "",
            body: action.payload.body,
         };
      case ActionTypes.ALERT_HIDE:
         return {
            ...state,
            visible: false,
            title: "",
            appearance: "info",
            actions: "",
            body: "",
         };
      default:
         return state;
   }
};
