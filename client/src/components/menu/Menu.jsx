import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

export default class AppMenu extends Component {
	constructor() {
		super();
		this.state = { activeItem: 'home' };
	}

	render() {
		const { activeItem } = this.state;
		return (
			<div>
				<Menu pointing className="app-menu">
					<Menu.Menu position='left'>
						<Menu.Item
							as={NavLink} to="/tasks"
							name='Shop'
							active={activeItem === 'tasks'}
							onClick={(e, { name }) => this.setState({ activeItem: name })}
						>
                            Tasks
						</Menu.Item>
						<Menu.Item
							as={NavLink} to="/task/create"
							name='Shop'
							active={activeItem === 'task'}
							onClick={this.handleItemClick}
						>
                            Task
						</Menu.Item>
					</Menu.Menu>
					<Menu.Menu position='right'>
						<Menu.Item
							as={NavLink} to="/"
							name='Home'
						>
                            Home
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		)
	}
}
