import React from 'react'
import { Image, Loader, Segment } from 'semantic-ui-react'

const LoaderSpin = () => (
  <Segment inverted>
    <Loader active inverted />
    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderSpin