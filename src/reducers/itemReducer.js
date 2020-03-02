import * as Types from '../constants/ActionTypes';
var initialState = {};

const itemReducer = (state = initialState, action) => {
    switch(action.type){
        case Types.FETCH_ITEM:
            return ;
        default :
            return state;
    }
}

export default itemReducer;