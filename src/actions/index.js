import Axios from 'axios';
// import fetch from 'cross-fetch'
export const SET_USER = 'SET_USER';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECIEVE_POSTS = 'RECIEVE_POSTS';
export const SELECT_SUBREDIT = 'SELECT_SUBREDIT';
export const INVALIDATE_SUBREDIT = 'INVALIDATE_SUBREDIT';

export function selectSubredit (subredit) {
    return {
        type: SELECT_SUBREDIT,
        subredit
    }
}

export function invalidateSubredit (subredit) {
    return {
        type: INVALIDATE_SUBREDIT,
        subredit
    }
}

export function requestPosts (subredit) {
    return {
        type: REQUEST_POSTS,
        subredit
    }
}

export function recievePosts (subredit, data) {
    return {
        type: RECIEVE_POSTS,
        subredit,
        posts: data,
        receivedAt: Date.now() 
    }
}

export function fetchPosts (subredit) {
    return dispatch => {
        dispatch(requestPosts(subredit));
        return Axios.get(`/react-redux`).then(
            response =>{
                dispatch(recievePosts(subredit, response.data.data))
            } 
        )
    }
}

export function shouldFetchPosts (state, subredit) {
    const posts = state.postsBySubredit[subredit];
    if (!posts) {
        return true 
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded (subredit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subredit)) {
            return dispatch(fetchPosts(subredit))
        }
    }
}

export const setUser = (userInfo) => {
    return {
        type: SET_USER,
        userInfo: userInfo
    }
}