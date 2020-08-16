import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import UserReducer from "./UserReducer";
import AuthReducer from "./AuthReducer";
import AppState from "../types";

const rootReducer = combineReducers<AppState>({
   home: HomeReducer,
   user: UserReducer,
   auth: AuthReducer,
});

export default rootReducer;
