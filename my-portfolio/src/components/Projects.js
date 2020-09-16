import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Buzz from '../imgs/buzz.png';
import Game from '../imgs/game.png';
import Todo from '../imgs/todo.png';

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
            <CardTitle style={{color: '#717171', height: '176px', background: `url(${Todo}) center/cover`}}>Todo</CardTitle>
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
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#717171', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>React Project</CardTitle>
              <CardText>Calculator</CardText>
              <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        </div>
      )
    } else if (this.state.activeTab === 1) {
      return(
        <div className='projects-grid'>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: `url(${Buzz}) center/cover`}}>Buzzers</CardTitle>
            <CardText>Buzzers</CardText>
            <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
            <Button colored>
                <Link style={{textDecoration: 'none', color: '#6C58BE'}} to='https://github.com/didymus707/Buzzers'>Github</Link>
              </Button>
              <Button colored>
                <Link style={{textDecoration: 'none', color: '#6C58BE'}} to='https://pure-dawn-14243.herokuapp.com'>Live Demo</Link>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>Social Media App</CardTitle>
            <CardText>Social Media App</CardText>
            <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
              <Button colored>
                <Link style={{textDecoration: 'none', color: '#6C58BE'}} to='https://github.com/didymus707/Buzzers'>Github</Link>
              </Button>
              <Button colored>
                <Link style={{textDecoration: 'none', color: '#6C58BE'}} to='https://pure-dawn-14243.herokuapp.com'>Live Demo</Link>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover'}}>Members App</CardTitle>
              <CardText>Members App</CardText>
              <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
        </div>
      )
    } else if (this.state.activeTab === 2) {
      return(
        <div className='projects-grid'>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#717171', height: '176px', background: `url(${Game}) center/cover`}}>Memory Game</CardTitle>
            <CardText>Memory Game</CardText>
            <CardActions border style={{display: 'flex', justifyContent: 'center'}}>
              <Button colored>
                <Link style={{textDecoration: 'none', color: '#6C58BE'}} to='https://github.com/didymus707/Memory-Game-FEND'>Github</Link>
              </Button>
              <Button colored>
                <Link style={{textDecoration: 'none', color: '#6C58BE'}} to='https://rawcdn.githack.com/didymus707/Memory-Game-FEND/9b3e68a7baf9cec7f6af8e7c7cd8c18102f93bce/index.html'>Github</Link>
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else {
      return(
        <div>
          <h1>This is HTML/CSS</h1>
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
          <Tab>HTML/CSS</Tab>
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
