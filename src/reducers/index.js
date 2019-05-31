import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import interestReducer from './interests';
import loginReducer from './login';
import roomsReducer from './rooms';

const rootReducer = combineReducers({
    interests: interestReducer,
    rooms: roomsReducer,
    form: formReducer,
    user: loginReducer,
})

export default rootReducer;