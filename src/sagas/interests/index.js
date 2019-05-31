import { call, put, takeLatest } from 'redux-saga/effects';
import apiUtil from '../../utils/apiUtil';

function* createInterests(){
    //Axios code to come here
}

export function* watchCreateInterest(){
    yield takeLatest(
        'CREATE_INTEREST_REQUEST',
        createInterests
    )
}

function* fetchLocations(){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'locations',
            method: 'get',
            authenticated: true,
            params: {},
            lightHouseService: 'default',
        });
        console.log(response);
        const successAction = {
            type: 'FETCH_ALL_LOCATIONS_SUCCESS',
            payload: {
                locations: response,
            }
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}

export function* watchFetchLocations(){
    yield takeLatest(
        'FETCH_ALL_LOCATIONS',
        fetchLocations
    )
}