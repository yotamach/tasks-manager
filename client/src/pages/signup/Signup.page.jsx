import { Paper, Typography, Grid, Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { FormTextField, FormDateField } from 'common/form/FormFields';
import { Box } from '@material-ui/core';
import { registerUser } from 'store/users/actions';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AlertMessage } from 'components/alert/Alert';
import { clearServerError } from 'store/errors/actions';

export default function Signup() {
	useEffect(() => {
		clearServerError();
	}, [])
	const history = useHistory();
	const error = useSelector(state => state.errors);
	const { handleSubmit, control, reset } = useForm({
		defaultValues: {
			firstname: '',
			lastname: '',
			email: '',
			birthDate: new Date().toISOString(),
			username: '',
			password: ''
		}
	});

	useEffect(() => {
		reset();
	}, []);

	const onSubmit = (data) => {
		registerUser(data)
	}

	return (
		<Paper elevation={6}>
			{!!error && <AlertMessage error={error} />}
			<Box p={2}>
				<Typography variant="h5">
                Registration
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3} justifyContent={'space-between'}>
						<Grid item xs={4}>
							<FormTextField
								control={control}
								name={'firstname'}
								id='form-input-control-firstName'
								label='First name'
								placeholder='First name'
								variant="outlined"
								rules={{ 
									required: {value: true, message: 'First name is required' },
									minLength:  {value: 6, message: 'First name must have at least 6 letters' },
									pattern: {value: /^[A-Za-z]+$/i, message: 'First name should contain only alphabet letters' },
								}}

							/>
						</Grid>
						<Grid item xs={4}>
							<FormTextField
								control={control}
								name={'lastname'}
								id='form-input-control-lastName'
								label='Last name'
								placeholder='Last name'
								variant="outlined"
								rules={{ required: {value: true, message: 'Last name is required' }}}
							/>
						</Grid>
						<Grid item xs={4}>
							<FormTextField
								control={control}
								name={'email'}
								type='email'
								id='form-input-control-email'
								label='E-mail'
								placeholder='E-mail'
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormDateField
								control={control}
								label={'Birth date'}
								name={'birthDate'}
								type="date"
								placeholder='Birth date'
								InputLabelProps={{
									shrink: true,
								}}
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormTextField
								control={control}
								name={'username'}
								id='form-input-control-firstName'
								label='User name'
								placeholder='User name'
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={4}>
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
						<Grid item xs={4}>
							<Button
								id='form-button-control-public'
								type="submit"
								color="primary"
								variant="contained"
							>
					Register
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
