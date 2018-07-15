import { put, call } from "redux-saga/effects";
import { URL_PROVIDER } from "../../../../api/urls";
import { startSubmit, stopSubmit, reset } from "redux-form";
import Api from "../../../../api";

export default function* submitProvider(action) {
  try {
    yield put(startSubmit("providerForm"));
    const response = yield call(Api.post, URL_PROVIDER, action.payload);
    yield put({ type: "PROVIDER_SUCCESS", payload: response });
    yield put(stopSubmit("providerForm"));
    yield put(reset("providerForm"));
  } catch (e) {
    yield put({ type: "PROVIDER_ERROR", payload: e.response.data });
    yield put(stopSubmit("providerForm", e.response.data));
  }
}
