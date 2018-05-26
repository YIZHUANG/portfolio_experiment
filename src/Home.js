import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';

import GetCookie from './util/getCookie';
import { DownLoadCV, onClickThemeChange } from './util/tracking';
import BasicInfo from './components/basicInfo';
import MainContent from './components/mainContent';
import Themes from './data/themes';

class Home extends Component {
  state = { showDropDown: false };
  changeTheme(theme, bg) {
    this.props.onThemeChange(theme, bg);
    this.setState({ showDropDown: false });
  }

  render() {
    const { onThemeChange } = this.props;
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
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
            <div className="dropdown">
              <button
                onClick={() => {
                  onClickThemeChange();
                  this.setState({ showDropDown: !this.state.showDropDown });
                }}
                className="dropbtn"
              >
                Change theme
              </button>
              {this.state.showDropDown && (
                <div className="dropdown-content">
                  {Themes.map(({ name, theme, bg }, index) => (
                    <a
                      onClick={() => this.changeTheme(theme, bg, name)}
                      key={index}
                    >
                      {name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="personal-info__container">
          <BasicInfo />
        </div>
        <MainContent />
      </div>
    );
  }
}

export default Home;
