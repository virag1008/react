import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware(); //to join redux-saga
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);
export default store;
