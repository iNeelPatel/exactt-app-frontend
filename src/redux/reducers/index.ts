import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import AuthReducer from "./AuthReducer";
import OrgnizationReducer from "./OrganizationReducer";
import RoleReducer from "./RoleReducer";
import AlertBoxReducer from "./AlertBoxReducer";
import DepartmentReducer from "./DepartmentReducer";
import AppState from "../types";

const rootReducer = combineReducers<AppState>({
   user: UserReducer,
   auth: AuthReducer,
   orgnization: OrgnizationReducer,
   role: RoleReducer,
   alertBox: AlertBoxReducer,
   department: DepartmentReducer,
});

export default rootReducer;
