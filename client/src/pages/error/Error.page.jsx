/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function ErrorPage(props) {
	const { errorInfo } = props;
	return (
		<div>
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>There was an error in loading this page.</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>
						{errorInfo && errorInfo.componentStack.toString()}
					</Typography>
				</AccordionDetails>
			</Accordion>
			<Button color="primary.main" variant="contained" onClick={() => {
				window.location.reload();
			}}>Reload</Button>
		</div>
	)
}

ErrorPage.propTypes = {
	errorInfo: PropTypes.object
}

export default ErrorPage;