import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
require('./style.css')

class Home extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'left'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="0"
              alt="avatar"
              className="events-img"
              />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Home;