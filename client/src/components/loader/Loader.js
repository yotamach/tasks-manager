import React, { Component } from 'react'
import { Image, Loader, Segment } from './node_modules/semantic-ui-react'

const LoaderSpin = () => (
  <Segment inverted>
    <Loader active inverted />
    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderSpin