import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';

const Main = () => (
  <Switch>
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/about' component={About} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/resume' component={Resume} />
    <Route exact path='/projects' component={Projects} />
  </Switch>
)

export default Main;