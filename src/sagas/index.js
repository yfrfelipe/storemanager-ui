import { put, takeLatest, call } from "redux-saga/effects";
import { getCustomer, saveProvider } from "../sagas/apiSagas";
import { startSubmit, stopSubmit, reset, initialize } from "redux-form";

function* callLocation() {
  try {
    const item = yield call(getCustomer);
    console.log(item);
    yield put({
      type: "API_CALL_SUCCESS",
      item
    });
  } catch (error) {
    console.log("ERROR ", error);
    yield put({
      type: "API_CALL_FAILURE",
      error
    });
  }
}

function* submitProvider(action) {
  yield put(startSubmit("providerForm"));
  try {
    yield call(saveProvider, action.payload);
    yield put(stopSubmit("providerForm"));
    yield put(reset("providerForm"));
    console.log("submitProvider", action.payload);
  } catch (e) {
    yield put(stopSubmit("providerForm", e.response.data));
  }
}

export default function* rootSaga() {
  console.log("Hello Sagas!");
  yield [
    takeLatest("API_CALL_REQUEST", callLocation),
    takeLatest("SUBMIT_PROVIDER", submitProvider)
  ];
}
