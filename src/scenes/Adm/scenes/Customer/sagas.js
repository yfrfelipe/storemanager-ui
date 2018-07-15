import { put, call } from "redux-saga/effects";
import { URL_CUSTOMER } from "../../../../api/urls";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../../api";

export default function* submitCustomer(action) {
  try {
    yield put(startSubmit("customerForm"));
    const response = yield call(Api.post, URL_CUSTOMER, action.payload);
    yield put({ type: "CUSTOMER_SUCCESS", payload: response });
    yield put(stopSubmit("customerForm"));
    yield put(reset("customerForm"));
  } catch (e) {
    yield put({ type: "CUSTOMER_ERROR", payload: e.response.data });
    yield put(stopSubmit("customerForm", e.response.data));
  }
}
