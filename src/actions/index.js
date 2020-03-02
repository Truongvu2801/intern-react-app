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
        return callApi(`search/suggestion?keyword=${keyword}`, 'POST', null).then(res => {
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