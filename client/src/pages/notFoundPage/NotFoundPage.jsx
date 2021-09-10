/* eslint-disable indent */
import React, { Component } from 'react'
import ErrorOutlineRoundedIcon from '@material-ui/icons/ErrorOutlineRounded';
import { Typography } from '@material-ui/core';
export default class NotFoundPage extends Component {
	render() {
		return (
			<div className="not-found-page">
					<ErrorOutlineRoundedIcon />
					<Typography as="h2">
                        404 Page not found
						<span>This page isn&lsquo;t exist</span>
					</Typography>
			</div>
		)
	}
}