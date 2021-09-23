import {actions} from './actionTypes';
import {getBoardSelector, getUserSelector, getWinnerSelector} from './selectors';
import store from '../index';
import { registerUser } from 'store/services/users.service';
import { setLoader } from '../loader/actions';
import {setServerError} from './../errors/actions';

const {dispatch} = store;

const regusterUser = async (user) => {
	try{
		setLoader(true)
		const response = await registerUser(user);
		setLoader(false);	
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
}


export {
	regusterUser
};