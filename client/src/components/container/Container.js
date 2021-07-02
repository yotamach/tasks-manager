import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { retrieveTasksList } from '../../store/tasks/actions';
import PropTypes from 'prop-types';

const mapStateToProps = () => {
	return {};
};
  
const mapDispatchToProps = () => {
	return {
		retrieveTasks: () => {
			retrieveTasksList();
		},
	}
};

function AppContainer(props) {
	useEffect(() => {
		const {retrieveTasks} = props;
		retrieveTasks();
	});
	return (
		<Container className="app-container">
			{props.children}
		</Container>
	)
}

AppContainer.propTypes = {
	children: PropTypes.element,
	retrieveTasks: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);