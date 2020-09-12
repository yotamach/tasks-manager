import React, { Component } from 'react'
import {selectTask, getSelectedTask, getTasksList, createTask, updateTask, removeTask, retrieveTasksList } from '../../store/tasks/actions';
import { connect } from 'react-redux';
import './tasksList.scss';
import { List } from 'semantic-ui-react';
import TaskItem from './taskItem/taskItem';

const mapStateToProps = (state) => {
	return {
		currentTask: getSelectedTask(state),
        tasks: getTasksList(state)
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
        retrieveTasks: (task) => {
			const action = retrieveTasksList();
			dispatch(action);
		},
		createTask: (task) => {
			const action = createTask(task);
			dispatch(action);
		},
		updateTask: (id,task) => {
			const action = updateTask(id,task);
			dispatch(action);
		},
		deleteTask: (id) => {
			const action = removeTask(id);
			dispatch(action);
        },
        setSelectedTask: (id) => {
			const action =  selectTask(id);
			dispatch(action);
		}
	}
};

class TasksList extends Component {
    constructor(props) {
        super(props);
        const {retrieveTasks} = this.props;
        retrieveTasks();
    };

    showTasks = () => {
        const {tasks,currentTask} = this.props;
        const {onUpdate,onDelete,onSelect} = this;
        const selectedTaskId = currentTask.id;
        return tasks.map((task) => <TaskItem slectedTaskId={selectedTaskId} onSelect={() => onSelect(task.id)} task={task} onUpdate={onUpdate} onDelete={onDelete} />);
    }
    onSelect = (id) => {
        const {setSelectedTask} = this.props;
        setSelectedTask(id);
    }

    onUpdate = () => {
        console.log('Updated!');
    }

    onDelete = () => {
        console.log('Deleted!');
    }

    render() {
        return (
            <List className="tasks-list" divided verticalAlign='middle'>
                {this.showTasks()}
            </List>
        )
    }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(TasksList);