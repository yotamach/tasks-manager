import React, {useEffect, useState} from 'react'
import {Confirm} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function ConfirmDialog(props) {
	const [open,
		setOpen] = useState(props.open)
	useEffect(() => {
		setOpen(props.open);
	}, [props.open]);

	return (<Confirm
		header={props.title}
		open={open}
		onCancel={() => props.onClose()}
		onConfirm={() => props.onConfirm()}
		size='tiny'/>)
}

ConfirmDialog.propTypes = {
	onConfirm: PropTypes.func,
	onClose: PropTypes.func,
	open: PropTypes.bool,
	title: PropTypes.string
};