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
    id: '',
    balance: 0,
    username: '',
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
            console.log(action.payload);
            return {
                ...state,
                preferredLocation: action.payload.details.prefered_location_id,
                preferredSport: action.payload.details.prefered_sport_id,
                username: action.payload.details.username,
                id: action.payload.details.id,
                balance: action.payload.details.balance,
            }
        }
        default:
            return state;
    }
}

export default reducer;