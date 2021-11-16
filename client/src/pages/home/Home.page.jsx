import React from 'react'
import { TasksPie } from 'components/tasksPie/tasksPie';
import { Typography, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.background
	},
}));

const Home = () => {
	const classes = useStyles();
	console.log(classes);
	return (
		<>
			<Typography className={classes.root} variant="h4">
					Dashboard
			</Typography>
			<Grid container alignItems="stretch">
				<Grid item md={6}>
					<Paper className={classes.root}>
						<Typography variant="h5">
							Tasks by status
						</Typography>
						<TasksPie />
					</Paper>
				</Grid>
				<Grid item md={6}>
					<Paper className={classes.root}>
						<Typography variant="h5">
							Tasks today to be done
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</>
	)
}

export default Home;
