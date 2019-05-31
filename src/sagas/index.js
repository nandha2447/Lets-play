import { all, fork } from 'redux-saga/effects';
import { watchCreateInterest, watchFetchLocations } from './interests';
import { watchLoginRequest, watchRegisterUser } from './login';
import { watchFetchLocations, watchFetchSports } from './interests';
import { watchFetchRooms } from './rooms';

const rootSaga = function*() {
    yield all([
        fork(watchCreateInterest),
        fork(watchLoginRequest),
        fork(watchRegisterUser),
        fork(watchFetchLocations),
        fork(watchFetchSports),
        fork(watchFetchRooms),
    ]);
}

export default rootSaga;