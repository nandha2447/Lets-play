import { all, fork } from 'redux-saga/effects';
import {  watchFetchLocations,watchFetchSports  } from './interests';
import { watchLoginRequest, watchRegisterUser } from './login';
import { watchFetchRooms } from './rooms';

const rootSaga = function*() {
    yield all([
        fork(watchLoginRequest),
        fork(watchRegisterUser),
        fork(watchFetchLocations),
        fork(watchFetchSports),
        fork(watchFetchRooms),
    ]);
}

export default rootSaga;