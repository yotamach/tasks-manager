import React, { useState } from 'react'
import {Fragment} from 'react';
import {Button, Label, Grid} from 'semantic-ui-react';
import ConfirmDialog from '../../../common/confirmDialog/confirmDialog';
import {handleStatusLabel, handleStatusLabelColor} from '../../../utils/Utils';

export default function TaskItem(props) {
	const {task, onUpdate, onDelete} = props;
	const [confirmState, setConfirmState] = useState(false)
	const {_id} = task;

	return (
		<Fragment>
			<Grid celled='internally' className="task-item-row">
				<Grid.Column width={10}>
					<div className="task-title">{task.taskName}</div>
				</Grid.Column>
				<Grid.Column width={3}>
					<Label color={handleStatusLabelColor(task.status)} horizontal>
						{handleStatusLabel(task.status)}
					</Label>
				</Grid.Column>
				<Grid.Column width={3}>
					<Button inverted color='blue' icon='edit' onClick={() => onUpdate(_id, task)}/>
					<Button inverted color='red' icon='delete' onClick={() => setConfirmState(true)}/>
				</Grid.Column>
			</Grid>
			<ConfirmDialog header='Are you sure?' open={confirmState} onConfirm={() => { onDelete(_id); setConfirmState(false) }} onClose={() => setConfirmState(false)} />
		</Fragment>
	)
}