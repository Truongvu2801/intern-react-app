import * as Types from "../constants/ActionTypes";
let initialState = {
  posts: "",
  totalPost: "",
  searchSuggestion: "",
  post: "",
  pageNumber: 1,
  pageSearch: "",
  keySearch: ''
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
    case Types.STORE_PAGE_SEARCH:
      return {
        ...state,
        pageSearch: action.page
      };
    case Types.STORE_KEY_SEARCH:
      return {
        ...state,
        keySearch: action.key
      }
    default:
      return state;
  }
};

export default postReducer;
