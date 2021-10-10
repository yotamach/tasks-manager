import React from 'react'
import { makeStyles, Box, Grid } from '@material-ui/core';
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
		<Box m={2} width={'100%'}>
			<Grid container justifyContent="space-between" width={"80%"}>
				<Grid item xs={6}>
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
				New Task
					</NavLink>
				</Grid>
				<Grid 
					item
					xs={6}
				>
					<NavLink
						style={{ float: 'right' }}
						activeClassName={classes.active}
						className={classes.menuButton}
						to="/signup"
						exact={true}
					>
				Sign up
					</NavLink>
					<NavLink
						style={{ float: 'right' }}
						activeClassName={classes.active}
						className={classes.menuButton}
						to="/login"
						exact={true}
					>
				Login
					</NavLink>
				</Grid>
			</Grid>
		</Box>
	)
}
