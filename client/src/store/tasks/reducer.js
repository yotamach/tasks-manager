import {actions} from './actionTypes';

let initialState = {
    tasks: [
    ],
    selectedTask: {},
};

function tasksReducer(state = initialState, action) {
    const {payload} = action;
    switch (action.type) {
        case `${actions.CREATE_TASK}_SUCCESS`:
        case actions.UPDATE_TASK:
        case actions.SELECT_TASK:
            state = {...state,...payload};
            return state;
        case `${actions.DELETE_TASK}_SUCCESS`:
            const{tasks} = state;
            const {id} = payload;
            const updatedTasks = tasks.filter((i) => i._id !== id);
            state = {...state,tasks: updatedTasks};
            return state;
        case `${actions.RETRIEVE_TASKS}_SUCCESS`:
            state = {...state,tasks: payload.tasks};
            return state;
        default:
            return state;
    }
};
export default tasksReducer;