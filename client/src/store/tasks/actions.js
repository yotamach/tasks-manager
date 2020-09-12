import {actions} from './actionTypes';
import {getTasksListSelector, getSelectedTaskSelector} from './selectors';
import store from '../index';

const state = store.getState();
const getTasksList = (state) => {
    return getTasksListSelector(state.tasks);
}

const getSelectedTask = (state) => {
    return getSelectedTaskSelector(state.tasks);
}

const retrieveTasksList = () => {
    const payload = {
        tasks: [
            {
                id: 1,
                taskName: "First task",
                endOfTime: new Date('2022/12/12'),
                status: 'completed'
            },
            {
                id: 2,
                taskName: "Second task",
                endOfTime: new Date('2011/12/12'),
                status: 'in progress'
            }
        ]
    };
    return { type: actions.RETRIEVE_TASKS, payload };
};

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