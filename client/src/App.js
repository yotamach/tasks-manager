import React from 'react';
import AppDetails from "./app.config.json";
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';
import { Container } from 'semantic-ui-react'
import AppHeader from './components/header/Header';
import AppFooter from './components/footer/Footer';
import AppHome from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

function App() {
	const {appName} = AppDetails;
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<AppHeader title={appName} />
						<Container className="app-container">
						<Switch>
							<Route exact path="/" component={AppHome} />
        					<Route exact path="/tasks" component={Tasks} />
							<Route path="*" component={NotFoundPage} />
    					</Switch>
						</Container>
				</Router>
			<AppFooter />
			</div>
		</Provider>
	);
}

export default App;
