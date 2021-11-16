import React from 'react';
import AppDetails from "./app.config.json";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from 'store/index';
import AppHeader from 'components/header/Header';
import AppFooter from 'components/footer/Footer';
import AppContainer from 'components/container/Container';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { blue, purple } from '@material-ui/core/colors';
import { Home, Task, Tasks, NotFound, Signup } from 'pages';
import Login from 'pages/login/Login.page';
import { ProtectedRoute } from 'common/protectedRoute/ProtectedRoute';


const theme = createTheme({
	palette: {
		primary: {
			main: blue[800]
		},
		secondary: {
			main: purple[100]
		}
	},
	transitions: {
		duration: {
			shortest: 150,
			shorter: 200,
			short: 250,
			standard: 300,
			complex: 375,
			enteringScreen: 225,
			leavingScreen: 195,
		}
	}
});

function App() {
	const {appName} = AppDetails;
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
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
