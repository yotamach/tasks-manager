const getTasksListSelector = (state) => state.tasks;
const getSelectedTaskSelector = (state) => state.selectedTask;

export {
    getTasksListSelector,
    getSelectedTaskSelector
};