import { combineReducers } from 'redux';
import itemReducer from './itemReducer';

const appReducers = combineReducers({
    itemReducer
});

export default appReducers;