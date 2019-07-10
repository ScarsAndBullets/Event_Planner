import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
// import AboutMe from './aboutme';
import Contact from './contact';
// import Profile from './profile';
// import Resume from './resume';


const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/contact" component={Contact} />
  </Switch>
)
    // <Route path="/aboutme" component={AboutMe} />
    // <Route path="/resume" component={Resume} />
    // <Route path="/profile" component={Profile} />

export default Main;