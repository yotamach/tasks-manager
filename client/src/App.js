import React from 'react';
import AppDetails from "./app.config.json";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/index';
import AppHeader from './components/header/Header';
import AppFooter from './components/footer/Footer';
import AppHome from './pages/home/Home';
import Tasks from './pages/tasks/Tasks';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Task from './pages/task/Task';
import AppContainer from './components/container/Container';

function App() {
	const {appName} = AppDetails;
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<AppHeader title={appName}/>
					<AppContainer>
						<Switch>
							<Route exact path="/" component={AppHome}/>
							<Route exact path="/tasks" component={Tasks}/>
							<Route exact path={'/task/:mode'} component={Task}/>
			  				<Route exact path={'/task/:mode/:id'} component={Task}/>
							<Route path="*" component={NotFoundPage}/>
						</Switch>
					</AppContainer>
				</Router>
				<AppFooter/>
			</div>
		</Provider>
	);
}

export default App;
