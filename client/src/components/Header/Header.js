import React, { Component } from 'react'
import './Header.scss';
import AppMenu from '../menu/Menu';
import { Header } from 'semantic-ui-react';

export default class AppHeader extends Component {

    render() {
        const {title} = this.props;
        return (
            <div className="app-header">
                <Header as='h2' inverted>
                    {title}
                    <AppMenu />
                </Header>
            </div>
        )
    }
}
