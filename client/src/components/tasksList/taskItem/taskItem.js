import React from 'react'
import './taskItem.scss';
import {List,Button} from 'semantic-ui-react';

export default function TaskItem(props) {
    const {task,onUpdate,onDelete,selectedTaskId} = props;
    const {_id}= task;
    const selectedClass = selectedTaskId === _id ? "active" : "";
    return (
        <List.Item className={`list-item ${selectedClass}`}>
            <List.Content floated='right'>
                <Button.Group>
                    <Button inverted color='red' icon='edit' onClick={(_id) => onUpdate(_id,task)} />
                    <Button inverted color='blue' icon='delete' onClick={() => onDelete(_id)} />
                </Button.Group>
            </List.Content>
            <List.Content className="task-content">
                <div className="task-title">{task.taskName}</div>
                <div>{_id}</div>
                <div>232432432432</div>
           </List.Content>
        </List.Item>
    )
}