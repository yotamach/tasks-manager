import React from 'react'
import {List,Button} from 'semantic-ui-react';
import './taskItem.scss';

export default function TaskItem(props) {
    console.log(props);
    const {task,onUpdate,onDelete} = props;
    const id = task;
    return (
        <List.Item>
            <List.Content floated='right'>
                <Button primary onClick={() => onUpdate(id,task)}>Update</Button>
                <Button secondary onDelete={() => onDelete(id)}>Delete</Button>
            </List.Content>
            <List.Content className="task-content">
                <div>{task.taskName}</div>
                <div>{task.endOfTime.toString()}</div>
                <div>{task.status}</div>
           </List.Content>
        </List.Item>
    )
}