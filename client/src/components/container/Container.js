import React, {useEffect} from 'react'
import LoaderSpin from '../loader/Loader';
import { retrieveTasksList } from '../../store/tasks/actions';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';

function AppContainer(props) {
	useEffect(() => {
		retrieveTasksList();
	},[]);	

	return (<Box className="app-container">
		<ErrorBoundary>
			{props.children}
		</ErrorBoundary>
		<LoaderSpin />
	</Box>);
}

AppContainer.propTypes = {
	children: PropTypes.element,
	retrieveTasks: PropTypes.func
}

export default AppContainer;