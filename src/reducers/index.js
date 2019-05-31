import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import interestReducer from './interests';
import roomsReducer from './rooms';

const rootReducer = combineReducers({
    interests: interestReducer,
    rooms: roomsReducer,
    form: formReducer,
})

export default rootReducer;