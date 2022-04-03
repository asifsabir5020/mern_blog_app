import * as actions from './actions';

export default (state, action) => {
    switch(action.type){
        case actions.APP_FETCH_POST_LIST_REQUEST: {
            return {
                ...state,
                post: { list: [], loading: true }
            }
        }
        case actions.APP_FETCH_POST_LIST_SUCCESS: {
            return {
                ...state,
                post: { list: action.payload.data, loading: false }
            }
        }
        case actions.APP_FETCH_POST_LIST_ERROR: {
            return {
                ...state,
                post: { list: [], loading: false }
            }
        }

        case actions.APP_LOGIN_REQUEST: {
            return {
                ...state,
                auth: {...state.auth, loading: true }
            }
        }
        case actions.APP_LOGIN_SUCCESS: {
            return {
                ...state,
                auth: { user: action.payload.user, token: action.payload.token, loading: false }
            }
        }
        case actions.APP_LOGIN_ERROR: {
            return {
                ...state,
                auth: {...state.auth, loading: false }
            }
        }
    }
}