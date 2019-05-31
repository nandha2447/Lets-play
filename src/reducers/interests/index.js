export const fetchAllLocations = () => ({
    type: 'FETCH_ALL_LOCATIONS',
})

const initialState = {
    preferredLocation: '',
    preferredTime: '',
    preferredSport: '',
    locationList: [],
    timeSlotList: [],
    sportsList: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_ALL_LOCATIONS_SUCCESS':
            return {
                ...state,
                locationList: action.payload.locations,
            };
        default:
            return state;
    }
}

export default reducer;