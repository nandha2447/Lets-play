import { all, fork } from 'redux-saga/effects';
import { watchCreateInterest } from './interests';

const rootSaga = function*() {
    yield all([
        fork(watchCreateInterest)
    ])
}

export default rootSaga;