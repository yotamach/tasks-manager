import { Message } from '@material-ui/icons';
import React from 'react'
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';

export const Alert = () => {
	const {message} = useSelector(state => state.errors);
	
	return(	
		<Message color="danger">
			<Typography as="h5">{message}</Typography>
		</Message>
	)
}
