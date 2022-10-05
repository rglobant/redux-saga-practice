import { fork } from 'redux-saga/effects';

import watchGetUserDataSaga from './users/get-users-saga';

/**
 * Entry point to start all Sagas.
 * @returns {Object} an iterator object for sagas
 */
export default function* rootSaga() {
	yield fork(watchGetUserDataSaga);
}
