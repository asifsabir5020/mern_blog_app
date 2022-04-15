import React, { useReducer, useContext, createContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import reducer from './reducer';
import * as actions from './actions';
import { setAuthInfoAtLocal } from '../../utils/auth';
import { handleThrowError } from '../../utils/errors';

const AppContext = createContext();

export const initialState = {
    post: {
        list: [],
        loading: false,
    },
    auth: {
        user: {},
        token: null,
        loading: false,
    },
    notifications: []
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    const fetchPostList = async (url) => {
        try {
            const requestURL = url ? url : '/posts';
            dispatch({ type: actions.APP_FETCH_POST_LIST_REQUEST });
            const { data } = await axios.get(requestURL);
            dispatch({ type: actions.APP_FETCH_POST_LIST_SUCCESS, payload: data });
        } catch (e) {
            dispatch({ type: actions.APP_FETCH_POST_LIST_ERROR });
            handleThrowError(e);
        }
    }

    const login = async (formValues) => {
        try {
            dispatch({ type: actions.APP_LOGIN_REQUEST });
            const { data } = await axios.post('/users/auth/login', formValues);
            dispatch({ type: actions.APP_LOGIN_SUCCESS, payload: data });
            setAuthInfoAtLocal(data);
            axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
            navigate('/dashboard');
        } catch (e) {
            dispatch({ type: actions.APP_LOGIN_ERROR });
            handleThrowError(e);
        }
    }

    const getUserRole = () => {
        //TODO: set and get from context state 
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) return null;
        return user.role || null;
    };

    const createToast = data => {
        dispatch({ type: actions.APP_TOAST_CREATE, payload: data });
    }

    const deleteToast = key => {
        dispatch({ type: actions.APP_TOAST_DELETE, payload: key });
    }

    const appActions = {
        fetchPostList,
        login,
        getUserRole,
        createToast,
        deleteToast
    };
    return (
        <AppContext.Provider value={{ state, actions: appActions }}>
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext)
}