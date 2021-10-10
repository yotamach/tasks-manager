import { Paper, Typography, Grid, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { FormTextField } from 'common/form/FormFields';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AlertMessage } from 'components/alert/Alert';
import { clearServerError } from 'store/errors/actions';
import { loginUser } from 'store/users/actions';

export default function Login() {
	useEffect(() => {
		clearServerError();
	}, [])
	const history = useHistory();
	const error = useSelector(state => state.errors);
	const { handleSubmit, control, reset } = useForm({
		defaultValues: {
			username: '',
			password: ''
		}
	});

	useEffect(() => {
		reset();
	}, []);

	const onSubmit = (data) => {
		loginUser(data)
	}

	return (
		<Paper elevation={6} >
			{!!error && <AlertMessage error={error} />}
			<Box p={2}>
				<Typography variant="h5">
                Login
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container 
						spacing={3}   
						direction="column"
						justifyContent="center"
					>
						<Grid item xs={6}>
							<FormTextField
								control={control}
								name={'username'}
								id='form-input-control-firstName'
								label='User name'
								placeholder='User name'
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={6}>
							<FormTextField
								control={control}
								name={'password'}
								id='form-input-control-firstName'
								label='Password'
								placeholder='Password'
								variant="outlined"
								type="password"
							/>
						</Grid>
						<Grid 
							container
							item 
							xs={6}
							justifyContent="space-between"
						>
							<Button
								id='form-button-control-public'
								type="submit"
								color="primary"
								variant="contained"
							>
					Login
							</Button>
							<Button
								className="signup-back-button"
								id='form-button-control-public'
								type="submit"
								color="secondary"
								variant="contained"
							>
					Back
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</Paper>
	)
}
