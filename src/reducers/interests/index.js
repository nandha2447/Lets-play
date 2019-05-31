const initialState = {
    preferredLocation: '',
    preferredTime: '',
    preferredSport: '',
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'TEMPORARY':
            return state;
        default:
            return state;
    }
}

export default reducer;