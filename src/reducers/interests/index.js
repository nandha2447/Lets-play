export const fetchAllLocations = () => ({
    type: 'FETCH_ALL_LOCATIONS',
})

export const fetchAllSports = () => ({
    type: 'FETCH_ALL_SPORTS',
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
        case 'FETCH_ALL_SPORTS_SUCCESS':
            return {
                ...state,
                sportsList: action.payload.locations,
            };
        default:
            return state;
    }
}

export default reducer;