import { combineReducers } from 'redux';
import counter from './counter/reducer';
import auth from './auth/reducer';

const reducers = combineReducers({
    counter,
    auth
});

export default reducers;
