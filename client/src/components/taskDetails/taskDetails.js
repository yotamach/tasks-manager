import React, {useEffect, useState} from 'react'
import {Button, Form, Header} from 'semantic-ui-react'
import {createTask, getSelectedTask, updateTask} from '../../store/tasks/actions';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import {DateTimeInput} from 'semantic-ui-calendar-react';

const mapStateToProps = (state) => {
  return {
    currentTask: getSelectedTask(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createNewTask: (task) => {
      createTask(task);
    },
    updateExistingTask: (id,task) => {
      updateTask(id,task);
    }
  }
};

function TaskDetails(props) {
  const {currentTask} = props;
  const [task,
    setTask] = useState({taskName: '', endOfDate: '', taskDescription: ''});
  const {id, mode} = useParams();

  useEffect(() => {
    if (mode !== 'create') {
      setTask({taskName: currentTask.taskName, endOfDate: currentTask.endOfDate, taskDescription: currentTask.description});
    }
    // eslint-disable-next-line
  },[]);

  const handleSubmit = (event) => {
    const {createNewTask,updateExistingTask} = props;
    event.preventDefault();
    if(id) {
      updateExistingTask(id,task);
    } else {
      createNewTask(task);
    }
  }
  console.log('task',task);
  return (
    <div>
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
          })}
          />
            <Form.Field>
            <DateTimeInput
              label='Task end date'
              placeholder='Task end date'
              name='taskEndDate'
              value={task.endOfDate || ''}
              iconPosition="left"
              onChange={(index,event) => setTask({
                ...task,
                endOfDate: event.value
              })}
            />
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