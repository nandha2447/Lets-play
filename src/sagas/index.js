import { all, fork } from 'redux-saga/effects';
import { watchCreateInterest, watchFetchLocations } from './interests';
import { watchLoginRequest, watchRegisterUser } from './login';


const rootSaga = function*() {
    yield all([
        fork(watchCreateInterest),
        fork(watchFetchLocations),
        fork(watchLoginRequest),
        fork(watchRegisterUser)
    ])
}

export default rootSaga;