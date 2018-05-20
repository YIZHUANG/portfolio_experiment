import React from 'react';
import './card.css';

const Card = ({ title, children }) => {
  return (
    <div className="card__container">
      <div className="card__container--content">
        <div className="card--title">
          <div>{title}</div>
          <div>...</div>
        </div>
        {children}
        <div className="add-card">Add a card...</div>
      </div>
    </div>
  );
};

export default Card;
