import {actions} from './actionTypes';
import {getTasksListSelector, getSelectedTaskSelector} from './selectors';
import store from '../index';
import serviceRequest from './../serviceRequest';
import {setServerError} from './../errors/actions';

const state = store.getState().tasks;
const {dispatch} = store;
const getTasksList = (state) => {
    return getTasksListSelector(state.tasks);
}

const getSelectedTask = (state) => {
    return getSelectedTaskSelector(state.tasks);
}

const retrieveTasksList = () => {
    serviceRequest(
        '/api/tasks',
        'get',
        null,
        (response) => {
            dispatch({
                type: `${actions.RETRIEVE_TASKS}_SUCCESS`,
                payload: response.data
            });
        },
        (err) => {
            setServerError(err);
        }
    );
}

const createTask = (newTask) => {
    const task = {
        taskName: newTask.taskName,
        endOfDate: newTask.endOfDate,
        description: newTask.taskDescription
    }
    let tasks = [...state.tasks];
    serviceRequest(
        '/api/tasks/createTask',
        'post',
        task,
        (response) => {
            tasks.push(response.data);
            dispatch({
                type: `${actions.CREATE_TASK}_SUCCESS`,
                payload: {
                    tasks,
                    selectedTask: response.data
                }
            });
        },
        (err) => {
            dispatch(setServerError(err));
        }
    );
};

const updateTask = (id,updateTask) => {
    console.log(id)
    const task = {
        taskName: updateTask.taskName,
        endOfDate: updateTask.endOfDate,
        description: updateTask.taskDescription
    }
    const payload = {
        id
    };
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
        },
        (err) => {
            dispatch(setServerError(err));
        }
    );
};

const selectTask = id => ({ type: actions.SELECT_TASK , payload: {id}});



const removeTask = (id) => {
    serviceRequest(
        '/api/tasks/' + id,
        'delete',
        null,
        (response) => {
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