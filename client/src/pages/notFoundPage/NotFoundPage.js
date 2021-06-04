import React, { Component } from 'react'
import { Header, Icon } from 'semantic-ui-react';

export default class NotFoundPage extends Component {
	render() {
		return (
			<div className="not-found-page">
				<Header as='h2'>
					<Icon name='settings' />
					<Header.Content>
                        404 Page not found
						<Header.Subheader>This page isn&lsquo;t exist</Header.Subheader>
					</Header.Content>
				</Header>
			</div>
		)
	}
}