/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { PropTypes } from 'prop-types';
import { Modal, Button } from '@material-ui/core';

export function PopUp(props) {
	const {size} = props;
	const [popupState,setPopupState] = useState({
		show: false,
		isUpdated: false
	});
	const dispatch = useDispatch()

	return (
		<Modal
			size={size}
			open={popupState.show}
			onClose={() => setPopupState((prevState) => ({ show: false , isUpdated: prevState.isUpdated}))}
		>
			<Modal.Header>Delete Your Account</Modal.Header>
			<Modal.Content>``
				<p>Are you sure you want to delete your account</p>
			</Modal.Content>
			<Modal.Actions>
				<Button color="primary" onClick={() => setPopupState((prevState) => ({ show: prevState.show , isUpdated: true}))}>
            No
				</Button>
				<Button color="secondary" onClick={() => dispatch({ type: 'close' })}>
            Yes
				</Button>
			</Modal.Actions>
		</Modal>
	)
}

PopUp.PropTypes = {
	size: PropTypes.string,
}
