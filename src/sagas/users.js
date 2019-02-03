import { takeEvery, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUserRequestSuccess(result.data.data));
  } catch (e) {
    console.log(e);
  }
}

function* watchEveryUserAction() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchEveryUserAction)];
export default userSagas;
