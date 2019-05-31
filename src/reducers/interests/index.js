export const fetchAllLocations = () => ({
    type: 'FETCH_ALL_LOCATIONS',
})

export const fetchAllSports = () => ({
    type: 'FETCH_ALL_SPORTS',
})

export const updateInterests = ({preferredLocation, preferredSport}) => ({
    type: 'UPDATE_INTERESTS',
    payload: {
        id: 1,
        prefered_location_id: preferredLocation,
        prefered_sport_id: preferredSport,
    }
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
        case 'UPDATE_INTERESTS_SUCCESS': {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}

export default reducer;