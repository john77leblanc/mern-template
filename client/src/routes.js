import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from 'theme/globalStyle';
import { ThemeProvider } from 'styled-components';

import AppContainer from 'AppContainer';

// Modules
import Footer from 'modules/Footer';
import Navigation from 'modules/Navigation';

// Pages
import Home from 'pages/home';
import City from 'pages/city';

import theme from 'theme/theme';


const Routes = (
  <Router>
    <AppContainer>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/city/:name" component={City} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </AppContainer>
  </Router>
);

export default Routes;
