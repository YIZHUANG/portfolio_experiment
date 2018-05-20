import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './cookieConsent.css';

import RenderList from '../util/renderList';

class CookieConsent extends Component {
  render() {
    return (
      <div className="cookieConsent">
        <div className="cookieConsent__text">
          By continuing to use this site, you agree to the use of cookies and
          google analytics. Find out more by the following
        </div>
        <Link to="/cookie">Link</Link>
        <a onClick={this.props.closeCookie} className="close_btn">
          Got it!
        </a>
      </div>
    );
  }
}

export default CookieConsent;
