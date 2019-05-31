import { all, fork } from 'redux-saga/effects';
import {  watchFetchLocations,watchFetchSports, watchUpdateInterests  } from './interests';
import { watchLoginRequest, watchRegisterUser } from './login';
import { watchFetchRooms } from './rooms';

const rootSaga = function*() {
    yield all([
        fork(watchLoginRequest),
        fork(watchRegisterUser),
        fork(watchFetchLocations),
        fork(watchFetchSports),
        fork(watchFetchRooms),
        fork(watchUpdateInterests),
    ]);
}

export default rootSaga;