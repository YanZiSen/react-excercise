import {combineReducers} from 'redux'
import {SET_USER, REQUEST_POSTS, RECIEVE_POSTS, SELECT_SUBREDIT, INVALIDATE_SUBREDIT} from '../actions'

let initialState = {
    user: {
        userName: '',
        role: 1
    },
    selectedSubEdit: 'reactjs'
}

function selectedSubredit (state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_SUBREDIT:
            return action.subredit;
        default:
            return state;
    }
}

function posts (state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECIEVE_POSTS:
            return Object.assign({}, state, {
                items: action.posts,
                lastUpdated: action.lastUpdated,
                isFetching: false,
                didInvalidate: false
            })
        default:
            return state
    }
}

function postsBySubredit(state = {}, action) {
    switch (action.type) {
        case RECIEVE_POSTS:
        case INVALIDATE_SUBREDIT:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.subredit]: posts(state[action.subredit], action)
            });
        default:
            return state
    }
}

const user = (state = initialState.user, action) => {
    switch (action.type) {
        case SET_USER:
            return action.userInfo;
        default:
            return state;
    }
}

export default combineReducers({user, postsBySubredit, selectedSubredit})