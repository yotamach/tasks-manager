import {actions} from './actionTypes';
import {getTasksListSelector, getSelectedTaskSelector} from './selectors';
import store from '../index';
import {setServerError} from './../errors/actions';
import moment from 'moment';
import { setLoader } from '../loader/actions';
import { deleteTask, getTasks, postTask, putTask, getTask } from '../services/tasks.service';

//const state = store.getState().tasks;
const {dispatch} = store;
const getTasksList = (state) => {
	return getTasksListSelector(state.tasks);
}

const getSelectedTask = (state) => {
	return getSelectedTaskSelector(state.tasks);
}

const retrieveTasksList = async () => {
	try{
		setLoader(true);
		const resopnse = await getTasks();
		const tasksList = resopnse.data.tasks.map(item => ({...item, endOfDate: moment(item.endOfDate).format("YYYY-MM-DD h:mm A")}));
		dispatch({
			type: `${actions.RETRIEVE_TASKS}_SUCCESS`,
			payload: tasksList
		});
		setLoader(false);					
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
}

const createTask = async (newTask) => {
	const task = {
		name: newTask.taskName,
		endOfDate: newTask.taskEndDate.toDate(),
		description: newTask.taskDascripton,
		status: newTask.taskStatus
	}
	console.log(newTask);
	try{
		setLoader(true);
		const response = await postTask(task);
		dispatch({
			type: `${actions.CREATE_TASK}_SUCCESS`,
			payload: {
				task: response.data.task
			}
		});
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
};

const updateTask = async (id,updateTask) => {
	const task = {
		name: updateTask.taskName,
		endOfDate: updateTask.taskEndDate,
		description: updateTask.taskDascripton,
		status: updateTask.taskStatus
	}
	const payload = {
		id
	};
	try{
		setLoader(true);
		const response = await putTask(id, task);
		payload.task = response.data.task;
		dispatch({
			type: `${actions.UPDATE_TASK}_SUCCESS`,
			payload
		});
		setLoader(false);
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
};

const selectTask = async id => {
	try{
		setLoader(true);
		const response = await getTask(id);
		dispatch({
			type: actions.SELECT_TASK,
			payload: response.data.task
		});
		setLoader(false);
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
}



const removeTask = async (id) => {
	try{
		setLoader(true);
		await deleteTask(id);
		dispatch({
			type: `${actions.DELETE_TASK}_SUCCESS`,
			payload: {id}
		});
		setLoader(false);
	} catch(err) {
		setServerError(err);
		setLoader(false);
	}
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