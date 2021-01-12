import React, { Component } from 'react'
import {selectTask, getSelectedTask, getTasksList, createTask, updateTask, removeTask, retrieveTasksList } from '../../store/tasks/actions';
import { connect } from 'react-redux';
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
        retrieveTasks: () => {
            retrieveTasksList();
		},
		createTask: (task) => {
			createTask(task);
		},
		updateTask: (id,task) => {
			const action = updateTask(id,task);
			dispatch(action);
		},
		deleteTask: (id) => {
            removeTask(id);
        },
        setSelectedTask: (id) => {
			const action = selectTask(id);
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
        if(!tasks.length)
            return (<div>There are no tasks!</div>);
        return tasks.map((task) => <TaskItem
            key={task._id}
            slectedTaskId={selectedTaskId}
            onSelect={() => onSelect(task.id)}
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
            />);
    }
    onSelect = (id) => {
        const {setSelectedTask} = this.props;
        setSelectedTask(id);
    }

    onUpdate = (_id,task) => {
        //this.props.history.push('/home');
        //this.props.history.push('/edit/'+_id);
        console.log( this.context);
    }

    onDelete = (id) => {
        const {deleteTask} = this.props;
        deleteTask(id);
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