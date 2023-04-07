// aapn multiple reducer function create karu shakto but in this index.js ekach reducer function pahije.. aani baki reducer function tya main reducer function madhe rahnar.

import changeTheNumber from "./upDown";
import MultDivNumber from "./MultDiv";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber,
  MultDivNumber,
});

export default rootReducer;
