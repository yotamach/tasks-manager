import {actions} from './actionTypes';
import {getTasksListSelector, getSelectedTaskSelector} from './selectors';
import store from '../index';
import serviceRequest from './../serviceRequest';
import {setServerError} from './../errors/actions';
import moment from 'moment';
import { setLoader } from '../loader/actions';

//const state = store.getState().tasks;
const {dispatch} = store;
const getTasksList = (state) => {
	return getTasksListSelector(state.tasks);
}

const getSelectedTask = (state) => {
	return getSelectedTaskSelector(state.tasks);
}

const retrieveTasksList = () => {
	setLoader(true);
	serviceRequest(
		'/api/tasks',
		'get',
		null,
		(response) => {
			const tasksList = response.data.tasks.map(item => ({...item, endOfDate: moment(item.endOfDate).format("YYYY-MM-DD h:mm A")}));
			dispatch({
				type: `${actions.RETRIEVE_TASKS}_SUCCESS`,
				payload: tasksList
			});
			setLoader(false);
		},
		(err) => {
			setServerError(err);
			setLoader(false);
		}
	);
}

const createTask = (newTask) => {
	const task = {
		taskName: newTask.taskName,
		endOfDate: newTask.endOfDate,
		description: newTask.taskDescription
	}
	setLoader(true);
	serviceRequest(
		'/api/tasks/createTask',
		'post',
		task,
		(response) => {
			dispatch({
				type: `${actions.CREATE_TASK}_SUCCESS`,
				payload: {
					task: response.data.task
				}
			});
			setLoader(false);
		},
		(err) => {
			dispatch(setServerError(err));
			setLoader(false);
		}
	);
};

const updateTask = (id,updateTask) => {
	const task = {
		taskName: updateTask.taskName,
		endOfDate: updateTask.endOfDate,
		description: updateTask.taskDescription,
		status: updateTask.status
	}
	const payload = {
		id
	};
	setLoader(true);
	serviceRequest(
		'/api/tasks/' + id,
		'put',
		task,
		(response) => {
			payload.task = response.data.task;
			dispatch({
				type: `${actions.UPDATE_TASK}_SUCCESS`,
				payload
			});
			setLoader(false);
		},
		(err) => {
			dispatch(setServerError(err));
			setLoader(false);
		}
	);
};

const selectTask = id => {
	serviceRequest(
		'/api/tasks/' + id,
		'get',
		null,
		(response) => {
			dispatch({
				type: actions.SELECT_TASK,
				payload: response.data.task
			});
		},
		(err) => {
			dispatch(setServerError(err));
		}
	);
};



const removeTask = (id) => {
	serviceRequest(
		'/api/tasks/' + id,
		'delete',
		null,
		() => {
			dispatch({
				type: `${actions.DELETE_TASK}_SUCCESS`,
				payload: {id}
			});
		},
		(err) => {
			dispatch(setServerError(err));
		}
	);
};

export {
	getTasksList,
	getSelectedTask,
	retrieveTasksList,
	createTask,
	updateTask,
	removeTask,
	selectTask
};