import React from 'react'
import { TasksPie } from '../../components/tasksPie/tasksPie';
import { Typography, Grid } from '@material-ui/core';

const AppHome = () => {
	
	return (
		<div>
			<Typography variant="subtitle1" gutterBottom>
				Home
			</Typography>
			<Grid container>
				<Grid item md={12}>
					<p>This is the main page</p>
				</Grid>
				<Grid item md={6}>
					<TasksPie />
				</Grid>
				<Grid item md={6}>
					<h5>Dark side</h5>
				</Grid>
			</Grid>
		</div>
	)
}

export default AppHome;
