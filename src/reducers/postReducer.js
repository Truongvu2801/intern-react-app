import * as Types from '../constants/ActionTypes';
var initialState = {};

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_POST:
            return action.posts;
        case Types.GET_POST_BY_ID:
            return action.post;
        case Types.SEARCH_POST:
            return action.posts;
        case Types.SEARCH_POST_BY_KeyWord:
            return action.post;
        default:
            return state;
    }
}

export default postReducer;