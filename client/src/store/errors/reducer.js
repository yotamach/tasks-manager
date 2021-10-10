import {actions} from './actionTypes';

let initialState = null;

function errorsReducer(state = initialState, action) {
	const {payload} = action;
	switch (action.type) {
	case actions.SET_SERVER_ERROR:
		return  {...state,...payload};
	case actions.CLEAR_ERROR:
		return null;
	default:
		return state;
	}
}
export default errorsReducer;