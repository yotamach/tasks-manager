import {actions} from './actionTypes';

let initialState = {
    tasks: [
    ],
    selectedTask: {},
};

function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case actions.CREATE_TASK:
        case actions.UPDATE_TASK:
        case actions.DELETE_TASK:
        case actions.RETRIEVE_TASKS:
        case actions.SELECT_TASK:
            const {payload} = action;
            state = {...state,...payload};
            return state;
        default:
            return state;
    }
};
export default tasksReducer;