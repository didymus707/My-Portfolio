import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width:'100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img 
              src="https://thumbs.dreamstime.com/b/cute-color-vector-illustration-beard-afro-black-guy-face-avatar-positive-young-black-guy-smiling-87383651.jpg"
              alt="avatar"
              className='avatar-img'
            />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
              <hr/>
              <p>HTML/CSS | Bootstrap | Javascript | Ruby | Ruby on Rails | React & Redux</p>
              <div className="social-links">
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true"/>
                </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-twitter-square" aria-hidden="true"/>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage

