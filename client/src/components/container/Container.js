import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import LoaderSpin from '../loader/Loader';
import { retrieveTasksList } from '../../store/tasks/actions';
import PropTypes from 'prop-types';
import { Alert } from '../alert/Alert';
import { Box } from '@material-ui/core';
import ErrorBoundary from 'components/errorBoundary/ErrorBoundary';

function AppContainer(props) {
	const {error} = useSelector(state => state.errors);
	useEffect(() => {
		retrieveTasksList();
	},[]);	

	return (<Box className="app-container">
		{!!error && <Alert />}
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