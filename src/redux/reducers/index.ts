import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import AuthReducer from "./AuthReducer";
import OrgnizationReducer from "./OrganizationReducer";
import RoleReducer from "./RoleReducer";
import AlertBoxReducer from "./AlertBoxReducer";
import DepartmentReducer from "./DepartmentReducer";
import CustomerReducer from "./CustomerReducer";
import TestGroupsReducer from "./TestGroupsReducer";
import ParameterReducer from "./ParameterReducer";
import SampleGroupsReducer from "./SampleGroupsReducer";
import SamplesDeatilsReducer from "./SamplesDeatilsReducer";
import AppState from "../types";

const rootReducer = combineReducers<AppState>({
   user: UserReducer,
   auth: AuthReducer,
   orgnization: OrgnizationReducer,
   role: RoleReducer,
   alertBox: AlertBoxReducer,
   department: DepartmentReducer,
   customer: CustomerReducer,
   testGroup: TestGroupsReducer,
   parameter: ParameterReducer,
   sampleGroup: SampleGroupsReducer,
   samplesDetails: SamplesDeatilsReducer,
});

export default rootReducer;
