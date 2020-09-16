import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div className='projects-grid'>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>React Project</CardTitle>
            <CardText>Todos</CardText>
            <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>React Project</CardTitle>
            <CardText>Tesla Range Calculator</CardText>
            <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fffnpm '}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>React Project</CardTitle>
              <CardText>Calculator</CardText>
              <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fffnpm '}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div className='projects-grid'>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>React Project</CardTitle>
            <CardText>Buzzers</CardText>
            <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fffnpm '}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>React Project</CardTitle>
            <CardText>Social Media App</CardText>
            <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
              <Button colored>Github</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fffnpm '}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>React Project</CardTitle>
              <CardText>Members App</CardText>
              <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fffnpm '}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        </div>
      )
    } else {
      return(
        <div>
          <h1>This is Javascript</h1>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Ruby on Rails</Tab>
          <Tab>Javascript</Tab>
        </Tabs>

        <Grid className="projects-grid">
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Projects
