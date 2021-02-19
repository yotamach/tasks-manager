import React from 'react'
import {selectTask, getSelectedTask, getTasksList, createTask, updateTask, removeTask } from '../../store/tasks/actions';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import TaskItem from './taskItem/taskItem';
import { useHistory } from 'react-router-dom';

const mapStateToProps = (state) => {
	return {
        currentTask: getSelectedTask(state),
        tasks: getTasksList(state)
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
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


function TasksList(props) {
    const history = useHistory();
    const showTasks = () => {
        const {tasks} = props;
        if(!tasks || !tasks.length)
            return (<div>There are no tasks!</div>);
        return tasks.map((task) => <TaskItem
            key={task._id}
            onSelect={() => onSelect(task._id)}
            task={task}
            onUpdate={onUpdate}
            onDelete={() => onDelete(task._id)}
            />);
    }


    const onSelect = (id) => {
        const {setSelectedTask} = props;
        setSelectedTask(id);
    }

    const onUpdate = (_id,task) => {
        const {setSelectedTask} = props;
        setSelectedTask(_id);
        history.push('/task/edit/'+_id);
    }
    
    const onDelete = (id) => {
        const {deleteTask} = props;
        deleteTask(id);
    }


    return (
        <List className="tasks-list" divided verticalAlign='middle'>
            {showTasks()}
        </List>
    )
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(TasksList);