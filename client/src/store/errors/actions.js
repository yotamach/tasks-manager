import {actions} from './actionTypes';
import {getErrorSelector} from './selectors';
import store from '../index';

//const state = store.getState();
const {dispatch} = store;
const getError = (state) => {
	return getErrorSelector(state);
}

const setServerError = (error) => {
	const errorObj = !error.response ? { nessgae: "Server error" } : error;
	return {
		type: actions.SET_SERVER_ERROR,
		payload: errorObj
	};
};

const clearServerError = () => {
	dispatch({type: actions.CLEAR_ERROR, payload: {} });
};

export {
	getError,
	setServerError,
	clearServerError
};