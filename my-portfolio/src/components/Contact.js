import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Adewale Orotayo</h2>
            <img 
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" 
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{ width: "75%", margin: 'auto', paddingTop: '1em'}}>Adewale Orotayo, a full stack developer</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <i className="fa fa-envelope-square" aria-hidden="true" />
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    didymus7007@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    adewale-thomas-orotayo
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    +234-803-117-0480
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
