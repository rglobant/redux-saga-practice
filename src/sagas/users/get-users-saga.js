import { call, put, takeEvery } from "redux-saga/effects";

// API
import { getUsers } from "../../api/users/users-api";

// ACTIONS
import { getUsersFAIL, getUsersSuccess, GET_USERS } from "../../redux/actions/users-actions";


// worker Saga: will be fired on GET_USERS actions
function* getUsersData() {
  try {
    // Get the users data API
    const user = yield call(getUsers);

    // Adding user info into the reducer
    yield put(getUsersSuccess(user));
  } catch (e) {
    yield put(getUsersFAIL(e.message));
  }
}

/*
  Starts fetchUser on each dispatched `GET_USERS` action.
  Allows concurrent fetches of user.
*/
function* watchGetUsersSaga() {
  yield takeEvery(GET_USERS, getUsersData);
}

export default watchGetUsersSaga;
