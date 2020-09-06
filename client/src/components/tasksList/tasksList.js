import React, { Component } from 'react'
import { getSelectedTask, getTasksList, createTask, updateTask, removeTask, retrieveTasksList } from '../../store/tasks/actions';
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
        const {tasks} = this.props;
        const {onUpdate,onDelete} = this;
        return tasks.map((task) => <TaskItem task={task} onUpdate={onUpdate} onDelete={onDelete} />);
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