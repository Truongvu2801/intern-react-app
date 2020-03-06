import * as Types from "../constants/ActionTypes";
var initialState = {
  posts: "",
  totalPost: "",
  searchSuggestion: "",
  post:""
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    // case Types.FETCH_POST:
    //   return { ...state }, action.posts;
    case Types.GET_POST_BY_ID:
      console.log(action.post);
      
      return { ...state, post: action.post };
    case Types.SEARCH_POST:
      return { ...state, searchSuggestion: action.posts };
    case Types.SEARCH_POST_BY_KEYWORD:
      return { ...state, posts: action.data };
    case Types.COUNT_ALL_POSTS:
      return {
        ...state,
        totalPost: action.number
      };
    default:
      return state;
  }
};

export default postReducer;
