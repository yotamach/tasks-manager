import React, { Component } from 'react'
import AppMenu from '../menu/Menu';
import PropTypes from 'prop-types';
import {AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

export default class AppHeader extends Component {
	render() {
		const {title} = this.props;
		return (
			<AppBar>
				<Toolbar variant="dense">
					<IconButton edge="start" aria-label="menu">
						<MenuIcon color="secondary" />
					</IconButton>
					<Typography variant="h6" color="secondary">
						{title}
					</Typography>
					<AppMenu />
				</Toolbar>
			</AppBar>
		)
	}
}

AppHeader.propTypes = {
	title: PropTypes.string
}