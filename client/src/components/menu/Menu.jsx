import React from 'react'
import { makeStyles, Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(4),
		color: 'white',
		textDecoration: 'none',
	},
	active: {
		color: '#DEDEDE'
	}
}));

export default function AppMenu() {
	const classes = useStyles();
	return (
		<Box m={2}>
			<NavLink
				activeClassName={classes.active}
				className={classes.menuButton}
				to="/"
				exact={true}
			>
				Home
			</NavLink>
			<NavLink
				activeClassName={classes.active}
				className={classes.menuButton}
				to="/tasks"
				exact={true}
			>
				Tasks
			</NavLink>
			<NavLink
				activeClassName={classes.active}
				className={classes.menuButton}
				to="/task/create"
				exact={true}
			>
				New Tasks
			</NavLink>
		</Box>
	)
}
