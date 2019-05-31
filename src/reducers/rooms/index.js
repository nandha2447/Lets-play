export const fetchRooms = () => ({
    type: 'FETCH_ROOMS_REQUEST',
})

export const requestJoin = (user_id, room_id) => ({
    type: 'JOIN_ROOM_REQUEST',
    payload:{
        user_id, room_id
    }
})

export const requestOptout = (user_id, room_id) => ({
    type: 'OPTOUTOF_ROOM_REQUEST',
    payload:{
        user_id, room_id
    }
})


const initialState = {
    rooms:[]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_ROOMS_SUCCESS':
            return {
                ...state,
                rooms: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;