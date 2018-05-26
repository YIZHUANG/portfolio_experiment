import React from 'react';
import './basicInfo.css';
import myPic from './image.png';

import {
  onClickLinkedin,
  onCLickGithub,
  onClickInstagram
} from '../util/tracking';

const BasicInfo = () => {
  return (
    <div className="BasicInfo">
      <img className="myImg" src={myPic} alt="myImg" />
      <h1 className="name">Yi Zhuang</h1>
      <div className="title">Software developer and Guitar player</div>
      <div className="icons_container">
        <a
          href="https://github.com/YIZHUANG"
          onClick={() => onClickLinkedin()}
          target="_blank"
        >
          <i className="fa fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/yi-zhuang-b7239b114/"
          target="_blank"
          onClick={() => onCLickGithub()}
        >
          <i className="fa fa-linkedin" />
        </a>
        <a
          href="https://www.instagram.com/rollingthebeatles/"
          onClick={() => onClickInstagram()}
          target="_blank"
        >
          <i className="fa fa-instagram" />
        </a>
      </div>
    </div>
  );
};

export default BasicInfo;
