import {actions} from './actionTypes';

let initialState = {
	board: [
		[-1,-1,-1],
		[-1,-1,-1],
		[-1,-1,-1]
	],
	currentUser: 1,
	winner: false
};

function userReducer(state = initialState, action) {
	switch (action.type) {
	case actions.CHANGE_BOARD:
	case actions.CHANGE_USER:
	case actions.WINNER:
		state = {...state, ...action.payload};
		return state;
	case actions.RESET:
		state = {...initialState};
		return state;
	default:
		return state;
	}
}
export default userReducer;