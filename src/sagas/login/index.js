import { call, put, takeLatest } from 'redux-saga/effects';
import apiUtil from '../../utils/apiUtil';


function* loginRequest(payload){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'login',
            method: 'post',
            //authenticated: true,
            data: payload.payload,
            params: {},
            lightHouseService: 'default',
        });
        console.log(response);
        const successAction = {
            type: 'LOGIN_SUCCESS',
            payload: {
                user: payload.payload,
            }
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}

function* registerUser(payload){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'users',
            method: 'post',
            //authenticated: true,
            data: payload.payload,
            //params: {},
            lightHouseService: 'default',
        });
        console.log(response);
        const successAction = {
            type: 'REGISTER_USER_SUCCESS',
            payload: {
                user: payload.payload,
            }
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}

export function* watchLoginRequest(){
    yield takeLatest(
        'LOGIN_REQUEST',
        loginRequest
    )
}

export function* watchRegisterUser(){
    yield takeLatest(
        'REGISTER_USER',
        registerUser
    )
}