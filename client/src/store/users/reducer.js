import {actions} from './actionTypes';

let initialState = {
	status: null,
	message: null,
	details: {}
};

function userReducer(state = initialState, action) {
	switch (action.type) {
	case actions.REGISTER_USER:
		state = {...state, ...action.payload};
		return state;
	case actions.LOGIN_USER:
	case actions.UPDATE_USER_DETAILS:
		state = {...state, ...action.payload};
		return state;
	case actions.LOGOUT_USER:
		state = {...initialState};
		return state;
	default:
		return state;
	}
}
export default userReducer;