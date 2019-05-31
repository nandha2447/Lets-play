import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import interestReducer from './interests';

const rootReducer = combineReducers({
    interests: interestReducer,
    form: formReducer,
})

export default rootReducer;