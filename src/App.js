import React, { Component } from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Cookies from 'js-cookie';

import particleConfig from './particle';

import { newVisitor, DownLoadCV } from './util/tracking';

import BasicInfo from './components/basicInfo';
import MainContent from './components/mainContent';
import Chatbot from './components/chatbot';
import CookieConsent from './components/cookieConsent';

import GetCookie from './util/getCookie';

class App extends Component {
  constructor() {
    super();
    this.state = { showCookie: false };
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

  render() {
    return (
      <div className="wrapper">
        <Particles
          params={particleConfig}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
        <div className="resume">
          <a
            className="resume-btn"
            href="https://files.fm/down.php?cf&i=jtc9s3rr&n=CV_YI.pdf"
            target="_blank"
            onClick={() => DownLoadCV()}
            style={
              !GetCookie() ? { marginTop: '100px' } : { marginTop: '20px' }
            }
          >
            <i className="fa fa-cloud" />
            Download Resume
          </a>
        </div>
        <div className="personal-info__container">
          <BasicInfo />
        </div>
        <MainContent />
        <Chatbot />
        {this.state.showCookie ? (
          <CookieConsent closeCookie={() => this.closeCookie()} />
        ) : null}
      </div>
    );
  }
}

export default App;
