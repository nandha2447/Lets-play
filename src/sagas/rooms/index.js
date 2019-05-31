import { call, put, takeLatest } from 'redux-saga/effects';
import apiUtil from '../../utils/apiUtil';

function* fetchRooms(){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'rooms',
            method: 'get',
            authenticated: true,
            params: {},
            lightHouseService: 'default',
        });
        /* const response = [
            {
                game: 'Football',
                ground: 'Spors Arena 1',
                location: 'Hinjewadi Phase 2',
                capacity: 10,
                joined: 5,
            },
            {
                game: 'Football',
                ground: 'Spors Arena 1',
                location: 'Hinjewadi Phase 2',
                capacity: 10,
                joined: 5,
            },
            {
                game: 'Football',
                ground: 'Spors Arena 1',
                location: 'Hinjewadi Phase 2',
                capacity: 10,
                joined: 5,
            },
            {
                game: 'Football',
                ground: 'Spors Arena 1',
                location: 'Hinjewadi Phase 2',
                capacity: 10,
                joined: 5,
            },
        ]; */
        console.log(response);
        const successAction = {
            type: 'FETCH_ROOMS_SUCCESS',
            payload: response
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}
function* joinRoom(action){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'room-user',
            method: 'post',
            authenticated: true,
            data: action.payload,
            lightHouseService: 'default',
        });
        
        console.log(response);
        const successAction = {
            type: 'JOIN_ROOM__SUCCESS',
            payload: response
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}
function* optOutOfRoom(action){
    try{
        const response = yield call (apiUtil, {
            endpoint: 'rooms',
            method: 'post',
            authenticated: true,
            data: action.payload,
            lightHouseService: 'default',
        });
        
        console.log(response);
        const successAction = {
            type: 'OPTOUTOF_ROOM_SUCCESS',
            payload: response
        }

        yield put(successAction);
    } catch (error){
        console.log(error);
    }
}

export function* watchFetchRooms(){
    yield takeLatest(
        'FETCH_ROOMS_REQUEST',
        fetchRooms
    )
}
export function* watchJoinRoomRequest(){
    yield takeLatest(
        'JOIN_ROOM_REQUEST',
        joinRoom
    )
}
export function* watchOptOutOfRoomRequest(){
    yield takeLatest(
        'OPTOUTOF_ROOM_REQUEST',
        optOutOfRoom
    )
}
export function* watchJoinRoomSuccess(){
    yield takeLatest(
        'JOIN_ROOM_SUCCESS',
        fetchRooms
    )
}
export function* watchOptOutOfRoomSuccess(){
    yield takeLatest(
        'OPTOUTOF_ROOM_SUCCESS',
        fetchRooms
    )
}