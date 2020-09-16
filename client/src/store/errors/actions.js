import {actions} from './actionTypes';
import {getErrorSelector} from './selectors';
import store from '../index';

const state = store.getState();
const {dispatch} = store;
const getError = (state) => {
    return getErrorSelector(state);
}

const setServerError = (error) => {
    dispatch({
        type: actions.SET_SERVER_ERROR,
        payload: error.response
    });
};

const clearServerError = () => {
    dispatch({type: actions.CLEAR_ERROR, payload: {} });
};

export {
    getError,
    setServerError,
    clearServerError
};