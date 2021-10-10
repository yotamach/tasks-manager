import {actions} from './actionTypes';

let initialState = {
	isAutenticated: false,
	status: null,
	message: null,
	details: {}
};

function userReducer(state = initialState, action) {
	switch (action.type) {
	case actions.REGISTER_USER:
		return {...state, ...action.payload};
	case actions.LOGIN_USER:
	case actions.UPDATE_USER_DETAILS:
		return {...state, ...action.payload};
	case actions.LOGOUT_USER:
		state = {...initialState};
		return state;
	default:
		return state;
	}
}
export default userReducer;