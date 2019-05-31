import { all, fork } from 'redux-saga/effects';
import { watchFetchLocations, watchFetchSports } from './interests';

const rootSaga = function*() {
    yield all([
        fork(watchFetchLocations),
        fork(watchFetchSports),
    ])
}

export default rootSaga;