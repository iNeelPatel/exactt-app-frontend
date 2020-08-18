import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import UserReducer from "./UserReducer";
import AuthReducer from "./AuthReducer";
import OrgnizationReducer from "./OrganizationReducer";
import AppState from "../types";

const rootReducer = combineReducers<AppState>({
   home: HomeReducer,
   user: UserReducer,
   auth: AuthReducer,
   orgnizationReducer: OrgnizationReducer,
});

export default rootReducer;
