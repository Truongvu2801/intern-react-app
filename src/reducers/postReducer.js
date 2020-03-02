import * as Types from '../constants/ActionTypes';
var initialState = {};

const postReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_POST:
            return action.posts;
        case Types.SEARCH_POST:
            console.log(action.posts);
            
            return action.posts;
        default :
            return state;
    }
}

export default postReducer;