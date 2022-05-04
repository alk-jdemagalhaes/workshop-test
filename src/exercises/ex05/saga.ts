import { call, put, takeEvery } from "redux-saga/effects";
import {
  FETCH_USER,
  fetchUserReceive,
  startLoading,
  stopLoading,
} from "./actions";
import { fetchUserApi } from "./api";

export function* fetchUserSaga(action: any) {
  yield put(startLoading);

  const response: { user: any } = yield call(fetchUserApi, action.payload);
  yield put(fetchUserReceive(response.user));
  yield put({ type: "RANDOMIZER" });
  yield put(stopLoading);
}

function* userSaga() {
  yield takeEvery(FETCH_USER, fetchUserSaga);
}

export { userSaga };
