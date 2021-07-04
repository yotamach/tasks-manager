import {actions} from './actionTypes';

let initialState = {
	loader: false
};

function loaderReducer(state = initialState, action) {
	const {payload} = action;
	switch (action.type) {
	case actions.SET_LOADER:
		state = {...state,...payload};
		return state;
	default:
		return state;
	}
}
export default loaderReducer;