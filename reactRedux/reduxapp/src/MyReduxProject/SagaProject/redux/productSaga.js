import { takeEvery, put } from "redux-saga/effects";

function* getProducts() {
  let response = yield fetch("http://localhost:3500/product");
  const data = yield response.json();
  yield put({ type: "SET_PRODUCT_LIST", data });
}

function* productSaga() {
  yield takeEvery("PRODUCT_LIST", getProducts);
}
export default productSaga;
