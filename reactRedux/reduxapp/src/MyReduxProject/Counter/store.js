import { createStore } from "redux";
import rootReducer from "./Reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

// REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION
// chrome browser vr redux che state trees etc show karnya sathi dyave lagte...otherwise kahi dusra use nhi
