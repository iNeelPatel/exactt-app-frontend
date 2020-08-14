import * as actionType from '../config/actionType';

const initialState = {
   home: 'Home',
   user: { name: 'neel' },
};

export default (state = initialState, action) => {
   switch (action.type) {
      case actionType.Hello:
         return {
            ...state,
            home: action.data,
         };
      default:
         return state;
   }
};
