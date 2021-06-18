import {actions} from './actionTypes';
import store from '../index';

const {dispatch} = store;
const setLoader = (loaderState) => {
	dispatch({
		type: actions.SET_LOADER,
		payload: loaderState
	});
};

export {
	setLoader
};