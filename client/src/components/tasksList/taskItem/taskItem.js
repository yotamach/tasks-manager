import React from 'react'
import {List,Button} from 'semantic-ui-react';
import './taskItem.scss';

export default function TaskItem(props) {
    console.log(props);
    const {task,onUpdate,onDelete,selectedTaskId} = props;
    const id = task;
    const selectedClass = selectedTaskId === task.id ? "active" : "";
    return (
        <List.Item className={selectedClass}>
            <List.Content floated='right'>
                <Button primary onClick={() => onUpdate(id,task)}>Update</Button>
                <Button secondary onDelete={() => onDelete(id)}>Delete</Button>
            </List.Content>
            <List.Content className="task-content">
                <div className="task-title">{task.taskName}</div>
                <div>{task.endOfTime.toString()}</div>
                <div>{task.status}</div>
           </List.Content>
        </List.Item>
    )
}