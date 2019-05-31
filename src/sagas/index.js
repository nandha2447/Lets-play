import { all, fork } from 'redux-saga/effects';
import { watchFetchLocations, watchFetchSports } from './interests';
import { watchFetchRooms } from './rooms';

const rootSaga = function*() {
    yield all([
        fork(watchFetchLocations),
        fork(watchFetchSports),
        fork(watchFetchRooms),
    ])
}

export default rootSaga;