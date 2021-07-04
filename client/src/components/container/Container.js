import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react'
import LoaderSpin from '../loader/Loader';
import { retrieveTasksList } from '../../store/tasks/actions';
import PropTypes from 'prop-types';

function AppContainer(props) {
	useEffect(() => {
		retrieveTasksList();
	},[]);

	const {loader} = useSelector(state => state.loader)
	
	return (<Container className="app-container">
		{loader ? <LoaderSpin /> : props.children}
	</Container>);
}

AppContainer.propTypes = {
	children: PropTypes.element,
	retrieveTasks: PropTypes.func
}

export default AppContainer;