import { Paper, Typography, Grid, Button } from '@material-ui/core'
import React from 'react'
import { useForm } from 'react-hook-form';
import { FormTextField, FormDateField } from 'common/form/FormFields';
import { Box } from '@material-ui/core';

export default function Signup() {
	const { handleSubmit, formState, control } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	}

	return (
		<Paper elevation={6}>
			<Box p={2}>
				<Typography variant="h4">
                Registration
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={3} justifyContent={'space-between'}>
						<Grid item xs={4} spacing={1}>
							<FormTextField
								control={control}
								name={'firstName'}
								id='form-input-control-firstName'
								label='First name'
								placeholder='First name'
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={4}>
							<FormTextField
								control={control}
								name={'lastName'}
								id='form-input-control-lastName'
								label='Last name'
								placeholder='Last name'
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
						<Grid item xs={6}>
							<FormTextField
								control={control}
								name={'userName'}
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
								color="secondasry"
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
