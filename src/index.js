import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';

import App from './App';
import Cookie from './boilterplate/cookie';
import registerServiceWorker from './registerServiceWorker';
ReactGA.initialize('UA-119550685-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cookie" component={Cookie} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();
