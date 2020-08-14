import * as actionType from '../config/actionType';

export function setHome(data) {
   return (dispatch) => {
      return dispatch({ type: actionType.Hello, data });
   };
}