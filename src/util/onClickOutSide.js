import React from 'react';

const OnClickOutSide = (event, close) => {
  event.preventDefault();
  const classArr = [
    'modal--content',
    'modal--content--title',
    'modal--item__container',
    'modal--item__container-content',
    'modal--content--title-text',
    'modal--content-bottom',
    'Link',
    'time'
  ];
  if (classArr.indexOf(event.target.className) < 0) {
    close();
  }
};

export default OnClickOutSide;
