import React, { Component } from 'react'
import TaskDetails from '../../components/taskDetails/taskDetails'

export default class Task extends Component {
    render() {
        return (
            <div className="create-task-form">
                <TaskDetails />
            </div>
        )
    }
}
