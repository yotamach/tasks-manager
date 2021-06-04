import React, { Component } from 'react'
import TasksList from '../../components/tasksList/tasksList';

export default class Tasks extends Component {
	render() {
		return (
			<div className="products">
				<TasksList />
			</div>
		)
	}
}
