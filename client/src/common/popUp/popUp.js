import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'
export default function popUp(props) {
	const {size} = props;
	const [popupState,setPopupState] = useState({
		show: false,
		isUpdated: false
	});
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
