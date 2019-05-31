import { call, put, takeLatest } from 'redux-saga/effects';
import apiUtil from '../../utils/apiUtil';

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

function* fetchSports(){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'sports',
            method: 'get',
            authenticated: true,
            params: {},
            lightHouseService: 'default',
        });
        console.log(response);
        const successAction = {
            type: 'FETCH_ALL_SPORTS_SUCCESS',
            payload: {
                locations: response,
            }
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}

export function* watchFetchSports(){
    yield takeLatest(
        'FETCH_ALL_SPORTS',
        fetchSports
    )
}

function* updateInterests({ payload }){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'users',
            method: 'put',
            authenticated: true,
            params: {},
            lightHouseService: 'default',
            data: payload,
        });
        console.log(response);
        const successAction = {
            type: 'UPDATE_INTERESTS_SUCCESS',
            payload: {
                details: response,
            }
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}

export function* watchUpdateInterests(){
    yield takeLatest(
        'UPDATE_INTERESTS',
        updateInterests
    )
}