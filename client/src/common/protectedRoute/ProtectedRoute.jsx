import React from "react";
import { Redirect, Route } from "react-router-dom";
import { PropTypes } from 'prop-types';
import Cookies from 'js-cookie';

export function ProtectedRoute({ component: Component, ...restOfProps }) {

	const isAuthenticated = Cookies.get('w_isAuth');

	return (
		<Route
			{...restOfProps}
			render={(props) =>
				JSON.parse(isAuthenticated) ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
}

ProtectedRoute.propTypes = {
	component: PropTypes.any
}