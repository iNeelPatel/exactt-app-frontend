import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';

const rootReducer = combineReducers({
   home: HomeReducer,
});

export default rootReducer;
