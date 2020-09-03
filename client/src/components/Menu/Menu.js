import React, { Component } from 'react'
import {Menu,Segment } from 'semantic-ui-react'
import {NavLink,withRouter,BrowserRouter as Router, Link} from 'react-router-dom';

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
                        <Menu.Item
                            as={NavLink} to="/landingpage"
                            name='Landing Page'
                            active={activeItem === 'landingpage'}
                            onClick={this.handleItemClick}
                        >
                                Landing Page
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
