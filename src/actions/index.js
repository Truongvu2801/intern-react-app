import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiHelper';

export const actFetchPostsRequest = () => {
    return (dispatch) => {
        return callApi('search/post', 'GET', null).then(res => {
            dispatch(actFetchPosts(res.data));
        });
    }
}

export const actFetchPosts = (posts) => {
    return {
        type: Types.FETCH_POST,
        posts
    }
}

export const actSearchPostRequest = (keyword) => {
    console.log('keyword: ', keyword);
    return (dispatch) => {
        return callApi(`search/suggestion?keyword=${keyword}`, 'GET', null).then(res => {
            dispatch(actSearchPost(res.data))
        })
    }
}

export const actSearchPost = (posts) => {
    return {
        type: Types.SEARCH_POST,
        posts
    }
}

export const actSearchPostByKeyWordRequest = (keyword) => {
    return (dispatch) => {
        return callApi(`search/get_post_by_keyword?keyword=${keyword}`, 'GET', null).then(res => {
            dispatch(actSearchPostByKeyWord(res.data))
        })
    }
}

export const actSearchPostByKeyWord = (posts) => {
    return {
        type: Types.SEARCH_POST_BY_KeyWord,
        posts
    }
}

// export const actGetPostRequest = () => {
//     return (dispatch) => {
//         return callApi()
//     }
// }

// export const actGetPost = () => {
//   return {
//       type: Types.GET_POST,
//       post
//   }  
// }
