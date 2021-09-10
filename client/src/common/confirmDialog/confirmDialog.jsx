import React, {useEffect, useState} from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import PropTypes from 'prop-types';

export function ConfirmDialog(props) {
	const [open,
		setOpen] = useState(props.open)
	useEffect(() => {
		setOpen(props.open);
	}, [props.open]);

	return (<Dialog
		onClose={props.onClose}
		header={props.title}
		open={open}
	>	
		<DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
		<DialogContent
			color={'primary'}
		>
			<DialogContentText id="alert-dialog-description">{props.content}
			</DialogContentText>
		</DialogContent>
		<DialogActions>
			<Button onClick={props.onClose} >
            Cancel
			</Button>
			<Button onClick={props.onConfirm} variant="contained" size="small" color="primary" autoFocus>
            Ok
			</Button>
		</DialogActions>
	</Dialog>)
}

ConfirmDialog.propTypes = {
	onConfirm: PropTypes.func,
	onClose: PropTypes.func,
	title: PropTypes.string,
	content: PropTypes.string,
	open: PropTypes.bool,
};