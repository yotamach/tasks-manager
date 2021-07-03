import React from 'react'
import { Loader, Dimmer, Segment, Image } from 'semantic-ui-react'

const LoaderSpin = () => {
	return (<Segment>
		<Dimmer active inverted>
			<Loader>Loading</Loader>
		</Dimmer>
		<Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
	</Segment>);
}

export default LoaderSpin;