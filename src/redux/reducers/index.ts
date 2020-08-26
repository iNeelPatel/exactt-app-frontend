import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import UserReducer from "./UserReducer";
import AuthReducer from "./AuthReducer";
import OrgnizationReducer from "./OrganizationReducer";
import RoleReducer from "./RoleReducer";
import AppState from "../types";

const rootReducer = combineReducers<AppState>({
   home: HomeReducer,
   user: UserReducer,
   auth: AuthReducer,
   orgnization: OrgnizationReducer,
   role: RoleReducer,
});

export default rootReducer;
