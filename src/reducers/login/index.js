export const loginRequest = (username,password) => ({
    type: 'LOGIN_REQUEST',
    payload: {
        username,
        password
    }
})

export const registerUser = (username,password) => ({
    type: 'REGISTER_USER',
    payload: {
        username,
        password
    }
})

const initialState = {
    user: {},
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                user: action.payload.user,
               
            };
           
        default:
            return state;
    }
}

export default reducer;