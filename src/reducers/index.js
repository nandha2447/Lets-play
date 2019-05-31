import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import interestReducer from './interests';
import loginReducer from './login';


const rootReducer = combineReducers({
    interests: interestReducer,
    user: loginReducer,
    form: formReducer,
})

export default rootReducer;