import React, {useEffect} from 'react'
import {createTask, selectTask, updateTask} from '../../store/tasks/actions';
import {useHistory, useParams} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useForm } from "react-hook-form";
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid, Button } from '@material-ui/core';
import { FormTextField, FormTextAreaField, RadioGroupField } from 'common/form/FormFields';
import moment from 'moment';
import { StatusOptions } from 'constans/task.consts';
import { FormDateField } from '../../common/form/FormFields';

const useStyles = makeStyles({
	row: {
		margin: 1
	},
	firstLineInput: {
		width: '49%',
	}
});

function TaskDetails() {
	const classes = useStyles();
	const {selectedTask} = useSelector(state => state.tasks);
	const { handleSubmit, formState, control, reset } = useForm({
		defaultValues: {
			taskName: "",
			taskDascripton: "",
			taskEndDate: moment(new Date()),
			taskStatus: "defined",
		}
	});
	const {id, mode} = useParams();
	const history = useHistory();

	useEffect(() => {
		if (mode !== 'create') {
			if (!selectedTask || !Object.keys(selectedTask).length)
				selectTask(id);
			reset({
				taskName: selectedTask.taskName,
				taskEndDate: moment(selectedTask.endOfDate),
				taskDascripton: selectedTask.description,
				taskStatus: selectedTask.status,
			});
		} else {
			reset();
		}
		// eslint-disable-next-line
  }, [selectedTask]);

	const onSubmit = (data) => {
		if (formState.isDirty) {
			if (id) {
				console.log('updating...');
				updateTask(id, data);
			} else {
				createTask(data);
			}
			history.push('/tasks');
		}
	}

	return (
		<div className="task-details-form">
			<Typography as='h3'>Create new task</Typography>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Grid container spacing={3} justifyContent={'space-between'}>
					<Grid item xs={6}>
						<FormTextField
							className={classes.firstLineInput}
							control={control}
							name={'taskName'}
							id='form-input-control-task-name'
							label='Task name'
							placeholder='Please select a name'
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={6}>
						<FormDateField
							control={control}
							label={'Due date'}
							name={'taskEndDate'}
							type="date"
							placeholder='Please select a due date'
							InputLabelProps={{
								shrink: true,
							}}
							variant="outlined"
						/>
					</Grid>
					<Grid item xs={12}>
						<FormTextAreaField
							control={control}
							name={'taskDascripton'}
							label="Description"
							multiline
							rows={4}
							placeholder='Please select a description'
							variant="outlined"
						/>
					</Grid>
					<Grid item>
						<RadioGroupField row options={StatusOptions} name="taskStatus"control={control} />
					</Grid>
				</Grid>
				<Button
					id='form-button-control-public'
					type="submit"
					color="primary"
					variant="contained"
				>
					{mode}
				</Button>
			</form>
		</div>
	)
}

TaskDetails.propTypes = {
	createNewTask: PropTypes.func,
	updateExistingTask: PropTypes.func,
	selectTask: PropTypes.func,
}

export default TaskDetails;