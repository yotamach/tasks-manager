import {actions} from './actionTypes';

let initialState = {
    tasks: [
    ],
    selectedTask: {},
};

function tasksReducer(state = initialState, action) {
    const {payload} = action;
    const {tasks} = state;
    let updatedTasks = [];
    switch (action.type) {
        case `${actions.CREATE_TASK}_SUCCESS`:
            return {...state,...payload}
        case `${actions.UPDATE_TASK}_SUCCESS`:
            const {task} = payload;
            updatedTasks = tasks.map(curTask =>{
                if(payload.id === curTask._id) {
                    return task;
                }
                return curTask;
            });
            state = {...state,tasks: updatedTasks,selectedTask: task};
            return state;
        case actions.SELECT_TASK:
            let selectedTask = tasks.filter(task => task._id === payload.id)[0];
            state = {...state,selectedTask};
            
            return state;
        case `${actions.DELETE_TASK}_SUCCESS`:
            updatedTasks = tasks.filter((i) => i._id !== payload.id);
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