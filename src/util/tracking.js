import React from 'react';
import ReactGA from 'react-ga';

const newVisitor = () => {
  ReactGA.event({
    category: 'new vistor',
    action: 'open webPage'
  });
};

const visitCookie = () => {
  ReactGA.event({
    category: 'visit cookie',
    action: 'visit cookie'
  });
};

const DownLoadCV = () => {
  ReactGA.event({
    category: 'DownLoad CV',
    action: 'DownLoad CV'
  });
};

const onCLickGithub = () => {
  ReactGA.event({
    category: 'Click github',
    action: 'Click github'
  });
};

const onClickLinkedin = () => {
  ReactGA.event({
    category: 'Click linkedin',
    action: 'Click linkedin'
  });
};

const onClickInstagram = () => {
  ReactGA.event({
    category: 'Click instagram',
    action: 'Click instagram'
  });
};

const onClickExperience = item => {
  ReactGA.event({
    category: 'Click experience',
    action: item
  });
};

export {
  newVisitor,
  DownLoadCV,
  onClickLinkedin,
  onCLickGithub,
  onClickInstagram,
  visitCookie,
  onClickExperience
};
