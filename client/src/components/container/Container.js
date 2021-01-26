import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import { retrieveTasksList } from '../../store/tasks/actions';

const mapStateToProps = (state) => {
    return {};
  };
  
  const mapDispatchToProps = (dispatch) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);