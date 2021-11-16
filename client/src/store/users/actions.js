import {actions} from './actionTypes';
import store from '../index';
import { postRegister, postLogin } from 'store/services/users.service';
import { setLoader } from '../loader/actions';
import {setServerError} from './../errors/actions';

const {dispatch} = store;

const registerUser = async (user) => {
	try{
		setLoader(true)
		const response = await postRegister(user);
		dispatch({
			type: actions.REGISTER_USER,
			payload: response.data.user,
		});
		setLoader(false);	
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
}

const loginUser = async (user) => {
	try{
		setLoader(true)
		const response = await postLogin(user);
		dispatch({
			type: actions.LOGIN_USER,
			payload: response.data.user,
		});
		setLoader(false);	
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
}

export {
	registerUser,
	loginUser
};