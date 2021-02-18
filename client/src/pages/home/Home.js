import React from 'react'
import {Grid, Header} from 'semantic-ui-react';
import { TasksPie } from '../../components/tasksPie/tasksPie';

const AppHome = () => {
  return (
    <div>
      <Header as='h2'>Header</Header>
      <Grid celled>
        <Grid.Row>
          <Grid.Column width={16}>
            <p>This is the main page</p>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={8}>
                <TasksPie />
          </Grid.Column>
          <Grid.Column width={8}>
            <h5>Dark side</h5>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default AppHome;
