import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="imag"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Serenity</h1>

            <hr/>

          <p> Events | Parties | BBQs | Concerts | Celebrations | Etc </p>

        <div className="social-links">

          {/* Google maps */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-map-marker" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-free-code-camp" aria-hidden="true" />
          </a>

          {/* Youtube */}
          <a href="http://google.com" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-youtube-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}


export default Landing;