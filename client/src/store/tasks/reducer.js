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
		tasks.push(payload.task);
		state = {...state,tasks,selectedTask: payload.task};
		return state;
	case `${actions.UPDATE_TASK}_SUCCESS`:
		updatedTasks = tasks.map(curTask =>{
			if(payload.id === curTask._id) {
				return payload.task;
			}
			return curTask;
		});
		state = {...state,tasks: updatedTasks,selectedTask: payload.task};
		return state;
	case actions.SELECT_TASK:
		state = {...state,selectedTask: payload};
            
		return state;
	case `${actions.DELETE_TASK}_SUCCESS`:
		updatedTasks = tasks.filter((i) => i._id !== payload.id);
		state = {...state,tasks: updatedTasks};
		return state;
	case `${actions.RETRIEVE_TASKS}_SUCCESS`:
		state = {...state,tasks: payload};
		return state;
	default:
		return state;
	}
}
export default tasksReducer;