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
    return (
      <div className="profile__container">
        <Card title="Main skills">
          <RenderList itemList={mainSkills} />
        </Card>
        <Card title="Experiences">
          <RenderList
            itemList={experiences}
            onClick={item => {
              onClickExperience(item.text);
              this.setState({ selectedItem: item, showModal: true });
            }}
          />
        </Card>
        <Card title="Personal traits">
          <RenderList itemList={keywords} />
        </Card>
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
