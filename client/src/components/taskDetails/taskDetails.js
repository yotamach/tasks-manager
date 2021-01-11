import React, {useState} from 'react'
import {Button, Input, Form, Header, TextArea} from 'semantic-ui-react'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import { createTask } from '../../store/tasks/actions';

function TaskDetails(props) {
  const [task,
    setTask] = useState({taskName: '', endOfDate: '', taskDescription: ''});

  const handleSubmit = (event) => {
    console.log(task);
    event.preventDefault();
    createTask(task);
  }

  return (
    <div>
      <Header as='h3'>Create new task</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            id='form-input-control-task-name'
            control={Input}
            label='Task name'
            placeholder='Task name'
            name='taskName'
            onChange={(event) => setTask({...task,taskName: event.target.value})}/>
          <SemanticDatepicker
            label='Task end date'
            placeholder='Task name'
            name='taskEndDate'
            onChange={(event, data) => setTask({...task,endOfDate: data.value})}/>
        </Form.Group>
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Description'
          placeholder='Description'
          name='taskDescription'
          onChange={(event) => setTask({...task,taskDescription: event.target.value})}/>
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Create'
          type="submit"/>
      </Form>
    </div>
  )
}

export default TaskDetails;