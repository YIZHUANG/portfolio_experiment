import React, { Component } from 'react';

import './cookie.css';
import { visitCookie } from '../util/tracking';

class Cookie extends Component {
  componentDidMount() {
    visitCookie();
  }
  render() {
    return (
      <div className="cookie--page">
        <h1>Cookies</h1>
        <div className="introduction">
          <span>I use cookies and google analytics on my website. Cookies are small
          text files on your computer that allow me to improve my website, and
          see how people are interacting with my website. Some cookies have
          already been set. You can decide not to use cookies and change your
          cookie settings at any time. See this link to see how: </span>
          <a href="http://www.aboutcookies.org/default.aspx" target="_blank">
            http://www.aboutcookies.org/default.aspx
          </a>
        </div>
        <div>I use cookies for the following purposes:</div>
        <ul>
          <li>To see how many people are visiting my website</li>
          <li>To see how people are interacting with my website</li>
        </ul>
      </div>
    );
  }
}

export default Cookie;
