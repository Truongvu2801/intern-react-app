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

export const actSearchPostByKeyWordRequest = (keyword, pageNumber) => {
    console.log(keyword);
    console.log(pageNumber);
    return (dispatch) => {
        return callApi(`search/get_post_by_keyword?keyword=${keyword}&page=${pageNumber}`, 'GET', null).then(res => {
            if (res) {
                dispatch(actSearchPostByKeyWord(res.data))
            }
        })
    }
}

export const actSearchPostByKeyWord = (data) => {
    console.log('data: ', data);
    return {
        type: Types.SEARCH_POST_BY_KEYWORD,
        data
    }
}

export const actCountAllPostsRequest = (keyword) => {
    return (dispatch) => {
        return callApi(`search/count_by_keyword?keyword=${keyword}`, 'GET', null).then(res => {
            if (res) {
                console.log(res.data);
                dispatch(actCountAllPosts(res.data))
            }
        })
    }
}

export const actCountAllPosts = (number) => {
    return {
        type: Types.COUNT_ALL_POSTS,
        number
    }
}
