export const fetchRooms = () => ({
    type: 'FETCH_ROOMS_REQUEST',
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