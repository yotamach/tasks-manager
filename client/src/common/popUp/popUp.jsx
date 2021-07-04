import React, { useState } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

export default function popUp(props) {
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
				<Button negative onClick={() => setPopupState((prevState) => ({ show: prevState.show , isUpdated: true}))}>
            No
				</Button>
				<Button positive onClick={() => dispatch({ type: 'close' })}>
            Yes
				</Button>
			</Modal.Actions>
		</Modal>
	)
}
