import React, { Component } from 'react';

import './modal.css';
import OnClickOutSide from '../util/onClickOutSide';

export default class Modal extends Component {
  render() {
    const { item, onClose } = this.props;
    return (
      <div
        className="modal__container"
        onMouseDown={e => OnClickOutSide(e, onClose)}
      >
        <div className="modal--content">
          <div className="modal--content--title">
            <div className="modal--content--title-text">{item.title}</div>
            <span className="closeBtn" onClick={onClose}>
              &times;
            </span>
          </div>
          <div className="modal--item__container">
            <a
              href={item.Link}
              target="_blank"
              className="modal--item__container-content"
            >
              {item.detail}
            </a>
          </div>
          <div className="modal--content-bottom">
            <span className="time">Time: {item.time}</span>
            <a href={item.Link} target="_blank" className="Link">
              ...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
