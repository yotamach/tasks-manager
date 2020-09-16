import {actions} from './actionTypes';
import {getTasksListSelector, getSelectedTaskSelector} from './selectors';
import store from '../index';
import serviceRequest from './../serviceRequest';
import {setServerError} from './../errors/actions';

const state = store.getState();
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
        actions.RETRIEVE_TASKS,
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

const createTask = ({taskName,endOfTime,status}) => {
    let tasks = [...state.tasks];
    const createdTask = {
        id: tasks.slice(-1).pop(),
        taskName,
        endOfTime,
        status
    };
    tasks.push(createdTask);
    const payload = {
        tasks,
        selectedTask: createdTask
    };
    return { type: actions.CREATE_TASK, payload };
};

const updateTask = (id,task) => {
    const tasks = [...state.tasks];
    let updatedTask = tasks[id];
    updatedTask = {
        id,
        ...task
    };
    const payload = {
        tasks: [...tasks,updatedTask],
        selectedTask: updatedTask
    };
    return { type: actions.UPDATE_TASK , payload };
};

const selectTask = (id) => {
    const tasks = [...state.tasks];
    let selectedTask = tasks[id];
    const payload = {
        selectedTask: selectedTask
    };
    return { type: actions.SELECT_TASK , payload };
};


const removeTask = (id) => {
    serviceRequest(
        '/api/tasks/' + id,
        'delete',
        actions.DELETE_TASK,
        (response) => {
            dispatch({
                type: `${actions.DELETE_TASK}_SUCCESS`,
                payload: {id}
            });
        },
        (err) => {
            setServerError(err);
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