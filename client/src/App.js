import React from 'react';
import AppDetails from "./app.config.json";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from 'store/index';
import AppHeader from 'components/header/Header';
import AppFooter from 'components/footer/Footer';
import AppContainer from 'components/container/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import { Home, Task, Tasks, NotFound, Signup } from 'pages';
import Login from 'pages/login/Login.page';
import { ProtectedRoute } from 'common/protectedRoute/ProtectedRoute';
import { lightTheme } from './styles/themes/light';
import { darkTheme } from './styles/themes/dark';
import { CssBaseline } from '@material-ui/core';


function App() {
	const {appName} = AppDetails;
	return (
		<Provider store={store}>
			<ThemeProvider theme={lightTheme}>
				<CssBaseline />
				<div className="App">
					<Router>
						<AppHeader title={appName}/>
						<AppContainer>
							<Switch>
								<Route exact path="/" component={Home}/>
								<ProtectedRoute exact path="/tasks" component={Tasks}/>
								<ProtectedRoute exact path={'/task/:mode'} component={Task}/>
								<Route exact path={'/task/:mode/:id'} component={Task}/>
								<Route exact path="/signup" component={Signup}/>
								<Route exact path="/login" component={Login}/>
								<Route path="*" component={NotFound}/>
							</Switch>
						</AppContainer>
					</Router>
					<AppFooter/>
				</div>
			</ThemeProvider>
		</Provider>
	);
}

export default App;
