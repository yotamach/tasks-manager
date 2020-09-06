import React, { Component } from 'react'
import {Menu } from 'semantic-ui-react'
import {NavLink} from 'react-router-dom';

export default class AppMenu extends Component {
    constructor() {
        super();
        this.state = { activeItem: 'home' };
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu pointing>
                    <Menu.Menu position='left'>
                        <Menu.Item
                            as={NavLink} to="/tasks"
                            name='Shop'
                            active={activeItem === 'tasks'}
                            onClick={this.handleItemClick}
                        >
                            Tasks
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
