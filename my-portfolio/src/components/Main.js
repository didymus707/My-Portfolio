import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import Contact from './Contact';
import Resume from './Projects';
import Projects from './Projects';

const Main = () => {
  return (  
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/project' component={Projects} />
    </Switch>
  )
}

export default Main;