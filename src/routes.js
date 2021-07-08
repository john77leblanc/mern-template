import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppContainer from 'AppContainer';

// Modules
import Footer from 'modules/Footer';
import Navigation from 'modules/Navigation';

// Pages
import Home from 'pages/home';


const Routes = (
  <Router>
    <AppContainer>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </AppContainer>
  </Router>
);

export default Routes;
