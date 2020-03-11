import * as Types from "../constants/ActionTypes";
let initialState = {
  posts: "",
  totalPost: "",
  searchSuggestion: "",
  post: "",
  pageNumber: 1
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POST_BY_ID:
      return { ...state, post: action.post };
    case Types.SEARCH_POST:
      return { ...state, searchSuggestion: action.posts };
    case Types.SEARCH_POST_BY_KEYWORD:
      return { ...state, posts: action.data, pageNumber: action.page };
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
