import { combineReducers } from 'redux';
import postReducer from './postReducer';

const appReducers = combineReducers({
    postReducer
});

export default appReducers;