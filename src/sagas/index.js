import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import { getCustomer } from "../sagas/apiSagas";

function* callLocation() {
  try {
    const item = yield call(getCustomer);
    console.log(item);
    yield put({ type: "API_CALL_SUCCESS", item });
  } catch (error) {
    console.log("ERROR ", error);
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

export default function* rootSaga() {
  console.log("Hello Sagas!");
  yield [takeLatest("API_CALL_REQUEST", callLocation)];
}
