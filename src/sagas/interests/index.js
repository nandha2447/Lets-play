import { takeLatest } from 'redux-saga/effects';

function* createInterests(){
    //Axios code to come here
}

export function* watchCreateInterest(){
    yield takeLatest(
        'CREATE_INTEREST_REQUEST',
        createInterests
    )
}