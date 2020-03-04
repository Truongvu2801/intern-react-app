import * as Types from '../constants/ActionTypes';
var initialState = {};

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_POST:
            return {...state} , action.posts;
        case Types.GET_POST_BY_ID:
            return {...state}, action.post;
        case Types.SEARCH_POST:
            return {...state}, action.posts;
        case Types.SEARCH_POST_BY_KEYWORD:
            return {...state}, action.posts;
        default:
            return state;
    }
}

export default postReducer;