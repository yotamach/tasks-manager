import React from 'react'
import { TasksPie } from 'components/tasksPie/tasksPie';
import { Typography, Grid, Paper } from '@material-ui/core';

const Home = () => {
	
	return (
		<>
			<Typography variant="h4">
					Dashboard
			</Typography>
			<Grid container alignItems="stretch">
				<Grid item md={6}>
					<Paper>
						<Typography variant="h5">
							Tasks by status
						</Typography>
						<TasksPie />
					</Paper>
				</Grid>
				<Grid item md={6}>
					<Paper>
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
