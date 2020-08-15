import { combineReducers } from "redux";
import HomeReducer from "./HomeReducer";
import AppState from "../types";

const rootReducer = combineReducers<AppState>({
    home: HomeReducer,
});

export default rootReducer;
