import {actions} from './actionTypes';
import {getTasksListSelector, getSelectedTaskSelector} from './selectors';
import store from '../index';
import serviceRequest from './../serviceRequest';

const state = store.getState();
const getTasksList = (state) => {
    return getTasksListSelector(state.tasks);
}

const getSelectedTask = (state) => {
    return getSelectedTaskSelector(state.tasks);
}

const retrieveTasksList = (dispatch) => {
    serviceRequest(
        '/api/tasks',
        'get',
        actions.RETRIEVE_TASKS
    ).then(response => {
        console.log(response);
        dispatch({ type: `${actions.RETRIEVE_TASKS}_SUCCESS`,payload: response.data});
    }).catch(err => {
        console.log(err);
        dispatch({ type:  `${actions.RETRIEVE_TASKS}_FAILURE`,payload: err.message});
    });
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
    const tasks = [...state.tasks];
    tasks.splice(tasks.findIndex(function(i){
        return i.id === id;
    }), 1);
    const payload = {
        tasks,
        selectedTask: {}
    };
    return { type: actions.DELETE_TASK , payload };
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