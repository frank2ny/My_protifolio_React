import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
                alt="avatar"
                src="https://i.ibb.co/T2LKN0B/IMG-2172-1-min.jpg"
              alt="avatar"
             width="300" height="350"
              />

            <div className="banner-text">
            <h2>Am <i>frank</i> john</h2>
              <h1>Full Stack Developer</h1>
                
            <hr/>

          <p>HTML/CSS | Ruby on Rails | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/frank-john-448405116/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/frank2ny/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/*twitter*/}
          <a href="https://twitter.com/frank2nyy" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true" />
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
