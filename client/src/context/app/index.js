import React, { useReducer, useContext, createContext } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import reducer from './reducer';
import * as actions from './actions';
import { setAuthInfoAtLocal } from '../../utils/auth';

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
    }
};

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const navigate = useNavigate();

    const fetchPostList = async () => {
        try {
            dispatch({ type: actions.APP_FETCH_POST_LIST_REQUEST });
            const { data } = await axios.get('/posts');
            dispatch({ type: actions.APP_FETCH_POST_LIST_SUCCESS, payload: data });
        } catch (e) {
            console.log(e);
            dispatch({ type: actions.APP_FETCH_POST_LIST_ERROR });
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
            console.log(e);
            dispatch({ type: actions.APP_LOGIN_ERROR });
        }
    }   

    const appActions = {
        fetchPostList,
        login
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