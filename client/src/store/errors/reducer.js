import {actions} from './actionTypes';

let initialState = {
    error: {}
};

function errorsReducer(state = initialState, action) {
    const {payload} = action;
    switch (action.type) {
        case actions.SET_SERVER_ERROR:
        case actions.CLEAR_ERROR:
            state = {...state,...payload};
            return state;
        default:
            return state;
    }
};
export default errorsReducer;