import React from 'react'
import {Button, Label, Grid} from 'semantic-ui-react';
import { handleStatusLabel, handleStatusLabelColor } from '../../../utils/Utils';

export default function TaskItem(props) {
    const {task,onUpdate,onDelete} = props;
    const {_id}= task;
    

    return (
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
                <Button inverted color='blue' icon='edit' onClick={() => onUpdate(_id,task)} />
                <Button inverted color='red' icon='delete' onClick={() => onDelete(_id)} />
            </Grid.Column>
        </Grid>
    )
}