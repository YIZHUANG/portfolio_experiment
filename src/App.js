import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Particles from 'react-particles-js';
import Cookies from 'js-cookie';

import CookieConsent from './components/cookieConsent';
import GetCookie from './util/getCookie';
import { newVisitor } from './util/tracking';
import Chatbot from './components/chatbot';
import Home from './Home';
import Cookie from './boilterplate/cookie';
import { RedTheme } from './theme';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { showCookie: false, particleConfig: RedTheme };
  }
  componentDidMount() {
    newVisitor();
    if (!GetCookie()) {
      this.setState({ showCookie: true });
    }
  }

  closeCookie() {
    Cookies.set('http://yi-portfolio.surge.sh/', true, { expires: 7 });
    this.setState({ showCookie: false });
  }

  onThemeChange(theme, bg) {
    this.setState({ particleConfig: theme });
    document.body.style.background = bg;
  }

  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Particles
            params={this.state.particleConfig}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Home
                  onThemeChange={(theme, bg) => this.onThemeChange(theme, bg)}
                />
              )}
            />
            <Route exact path="/cookie" component={Cookie} />
          </Switch>
          <Chatbot />
          {this.state.showCookie ? (
            <CookieConsent closeCookie={() => this.closeCookie()} />
          ) : null}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
