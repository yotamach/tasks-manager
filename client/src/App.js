import React from 'react';
import AppDetails from "./app.config.json";
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";
import LandingPage from './components/LandingPage/LandingPage';
import { Provider } from 'react-redux';
import store from './store/index';
import { Container } from 'semantic-ui-react'
import AppHeader from './components/Header/Header';
import AppFooter from './components/Footer/Footer';
import AppHome from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';

function App() {
	const {appName} = AppDetails;
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<AppHeader title={appName} />
						<Container className="app-container">
						<Switch>
							<Route exact path="/">
          						<AppHome />
        					</Route>
        					<Route exact path="/tasks">
								<Tasks />
        					</Route>
        					<Route exact path="/landingpage">
          						<LandingPage />
        					</Route>
    					</Switch>
						</Container>
				</Router>
			<AppFooter />
			</div>
		</Provider>
	);
}

export default App;
