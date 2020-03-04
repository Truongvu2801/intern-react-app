import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiHelper';

export const actGetPostByIdRequest = (id) => {
    return (dispatch) => {
        return callApi(`post/get_by_id?id=${id}`, 'GET', null).then(res => {
            dispatch(actGetPostById(res.data));
        });
    }
}

export const actGetPostById = (post) => {
    return {
        type: Types.FETCH_POST,
        post
    }
}

export const actSearchPostRequest = (keyword) => {
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
        type: Types.SEARCH_POST_BY_KEYWORD,
        posts
    }
}

