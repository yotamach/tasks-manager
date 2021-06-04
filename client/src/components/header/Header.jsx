import React, { Component } from 'react'
import { Header } from 'semantic-ui-react';
import AppMenu from '../menu/Menu';
import PropTypes from 'prop-types';

export default class AppHeader extends Component {
	render() {
		const {title} = this.props;
		return (
			<div className="app-header">
				<Header as='h2' className="app-title">
					{title}
					<AppMenu />
				</Header>
			</div>
		)
	}
}

AppHeader.propTypes = {
	title: PropTypes.string
}