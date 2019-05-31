import { all, fork } from 'redux-saga/effects';
import { watchCreateInterest, watchFetchLocations } from './interests';

const rootSaga = function*() {
    yield all([
        fork(watchCreateInterest),
        fork(watchFetchLocations)
    ])
}

export default rootSaga;