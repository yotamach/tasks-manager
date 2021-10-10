import React from 'react'
import { Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { PropTypes } from 'prop-types';

export const AlertMessage = ({ error }) => {
	const {status, message, name} = error;

	return(	
		<Alert severity="error">
			<Typography as="h4">Error: {status} {name}</Typography>
			<Typography as="h5">{message}</Typography>
		</Alert>
	)
}

AlertMessage.propTypes = {
	error: PropTypes.object
}
