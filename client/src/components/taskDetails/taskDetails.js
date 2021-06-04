import React, {useEffect, useState} from 'react'
import {Button, Form, Header, Radio} from 'semantic-ui-react'
import {createTask, getSelectedTask, selectTask, updateTask} from '../../store/tasks/actions';
import {useHistory, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {DateTimeInput} from 'semantic-ui-calendar-react';

const mapStateToProps = (state) => {
	return {currentTask: getSelectedTask(state)};
};

const mapDispatchToProps = () => {
	return {
		createNewTask: (task) => {
			createTask(task);
		},
		updateExistingTask: (id, task) => {
			updateTask(id, task);
		},
		selectTask: (id) => selectTask(id) 
	}
};

function TaskDetails(props) {
	const {id, mode} = useParams();
	const {currentTask} = props;
	const history = useHistory();
	const [task,
		setTask] = useState({taskName: '', endOfDate: '', taskDescription: '',status: 'defined'});

	useEffect(() => {
		if (mode !== 'create') {
			if(!Object.keys(currentTask).length) {
				const {selectTask} = props;
				selectTask(id);
				console.log(currentTask)
			}
			setTask({taskName: currentTask.taskName, endOfDate: currentTask.endOfDate, taskDescription: currentTask.description, status: currentTask.status});
		}
		// eslint-disable-next-line
  }, [currentTask]);

	const handleSubmit = (event) => {
		const {createNewTask, updateExistingTask} = props;
		event.preventDefault();
		if (id) {
			updateExistingTask(id, task);
		} else {
			createNewTask(task);
		}
		history.push('/tasks');
	}

	return (
		<div className="task-details-form">
			<Header as='h3'>Create new task</Header>
			<Form onSubmit={handleSubmit}>
				<Form.Group widths='equal'>
					<Form.Input
						id='form-input-control-task-name'
						label='Task name'
						placeholder='Task name'
						name='taskName'
						value={task.taskName || ''}
						onChange={(event) => setTask({
							...task,
							taskName: event.target.value
						})}/>
					<Form.Field>
						<DateTimeInput
							label='Task end date'
							placeholder='Task end date'
							name='taskEndDate'
							value={task.endOfDate || ''}
							iconPosition="left"
							dateFormat="YYYY-MM-DD h:mm A"
							onChange={(index, event) => setTask({
								...task,
								endOfDate: event.value
							})}/>
					</Form.Field>
				</Form.Group>
				<Form.TextArea
					id='form-textarea-control-opinion'
					label='Description'
					placeholder='Description'
					name='taskDescription'
					value={task.taskDescription || ''}
					onChange={(event) => setTask({
						...task,
						taskDescription: event.target.value
					})}/>
				<Form.Group>
					<Header as='h5'>Task status</Header>
					<Form.Field>
						<Radio
							label='Defined'
							name='radioGroup'
							value='defined'
							checked={task.status === 'defined'}
							onChange={(event,{value}) => setTask({
								...task,
								status: value
							})}/>
					</Form.Field>
					<Form.Field>
						<Radio
							label='In progress'
							name='radioGroup'
							value='inProgress'
							checked={task.status === 'inProgress'}
							onChange={(event,{value}) => setTask({
								...task,
								status: value
							})}/>
					</Form.Field>
					<Form.Field>
						<Radio
							label='Completed'
							name='radioGroup'
							value='completed'
							checked={task.status === 'completed'}
							onChange={(event,{value}) => setTask({
								...task,
								status: value
							})}/>
					</Form.Field>
					<Form.Field>
						<Radio
							label='Accepted'
							name='radioGroup'
							value='accepted'
							checked={task.status === 'accepted'}
							onChange={(event,{value}) => setTask({
								...task,
								status: value
							})}/>
					</Form.Field>
					<Form.Field>
						<Radio
							label='Blocked'
							name='radioGroup'
							value='blocked'
							checked={task.status === 'blocked'}
							onChange={(event,{value}) => setTask({
								...task,
								status: value
							})}/>
					</Form.Field>
				</Form.Group>
				<Form.Field
					id='form-button-control-public'
					control={Button}
					content='Create'
					type="submit"/>
			</Form>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetails);