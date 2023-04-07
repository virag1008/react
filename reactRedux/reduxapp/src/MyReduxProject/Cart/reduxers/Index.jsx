import { combineReducers } from "redux";
import { changeCount } from "./CartReducer";

const rootReducer = combineReducers({ changeCount });

export default rootReducer;
