import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './cookieConsent.css';

import RenderList from '../util/renderList';

class CookieConsent extends Component {
  render() {
    return (
      <div className="cookieConsent">
        <div className="cookieConsent__text">
          <span>
            By continuing to use this site, you agree to the use of cookies. Find
            out more by the following
            <Link to="/cookie" style={{ marginLeft: '5px' }}>
              Link
            </Link>
          </span>
          <a onClick={this.props.closeCookie} className="close_btn closeBtn">
            &times;
          </a>
        </div>
      </div>
    );
  }
}

export default CookieConsent;
