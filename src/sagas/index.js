import { takeLatest, fork } from "redux-saga/effects";
import submitCustomer from "../scenes/Adm/scenes/Customer/sagas";
import submitProvider from "../scenes/Adm/scenes/Provider/sagas";

export default function* rootSaga() {
  console.log("Hello Sagas!");
  yield [
    fork(takeLatest, "SUBMIT_PROVIDER", submitProvider),
    fork(takeLatest, "SUBMIT_CUSTOMER", submitCustomer)
  ];
}
