import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './homepage';
import AboutMe from './about';
import Contact from './contact';
import Project from './project';
import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />

    <Route path="/contact" component={Contact} />
    <Route path="/project" component={Project} />
    <Route path="/resume" component={Resume} />
    <Route path="/about" component={AboutMe} />
  </Switch>
)

export default Main;
