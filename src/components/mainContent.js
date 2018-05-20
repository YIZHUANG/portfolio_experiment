import React, { Component } from 'react';

import { onClickExperience } from '../util/tracking';
import mainSkills from '../data/mainSkills';
import keywords from '../data/keywords';
import experiences from '../data/experience';

import Card from './card';
import Modal from './modal';
import './mainContent.css';

import RenderList from '../util/renderList';

class MainContent extends Component {
  constructor() {
    super();
    this.state = { selectedItem: [], showModal: false };
  }
  render() {
    const ExperienceList = [];
    experiences.forEach((item, index) =>
      ExperienceList.push(
        <div key={index} className="card--item__container">
          <a
            onClick={() => {
              onClickExperience(item.text);
              this.setState({ selectedItem: item, showModal: true });
            }}
            target="_blank"
            className="card--item__container-content"
          >
            {item.text}
          </a>
        </div>
      )
    );
    return (
      <div className="profile__container">
        <Card title="Main skills" children={RenderList(mainSkills)} />
        <Card title="Experience" children={ExperienceList} />
        <Card title="Personal traits" children={RenderList(keywords)} />
        {this.state.showModal && (
          <Modal
            item={this.state.selectedItem}
            onClose={() => this.setState({ showModal: false })}
          />
        )}
      </div>
    );
  }
}

export default MainContent;
