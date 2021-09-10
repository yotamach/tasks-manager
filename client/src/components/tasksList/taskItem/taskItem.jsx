import React, { useState } from 'react'
import {Fragment} from 'react';
import {handleStatusLabel, handleStatusLabelColor} from '../../../utils/Utils';
import PropTypes from 'prop-types';
import { Grid, Chip, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ConfirmDialog } from 'common/confirmDialog/confirmDialog';

export default function TaskItem(props) {
	const {task, onUpdate, onDelete} = props;
	const [confirmState, setConfirmState] = useState(false)
	const {_id} = task;

	return (
		<Fragment>
			<Grid container justifyContent="space-between" alignItems="center">
				<Grid item xs={6}>
					<div className="task-title">{task.taskName}</div>
				</Grid>
				<Grid item xs={3}>
					<Chip  className="chip" style={{ backgroundColor: handleStatusLabelColor(task.status)}} label={handleStatusLabel(task.status)} />
				</Grid>
				<Grid item xs={3}>
					<IconButton aria-label="edit" onClick={() => onUpdate(_id, task)}>
						<EditIcon fontSize="large" />
					</IconButton>
					<IconButton aria-label="delete" onClick={() => setConfirmState(true)}>
						<DeleteIcon fontSize="large" />
					</IconButton>
				</Grid>
			</Grid>
			<ConfirmDialog title='Delete task' content="Are you sure you want to delete this task?" open={confirmState} onConfirm={() => { onDelete(_id); setConfirmState(false) }} onClose={() => setConfirmState(false)} />
		</Fragment>
	)
}

TaskItem.propTypes = {
	task: PropTypes.object,
	onUpdate: PropTypes.func,
	onDelete: PropTypes.func
}