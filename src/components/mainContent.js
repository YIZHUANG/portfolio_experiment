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
        <Card
          title="Main skills"
          children={<RenderList itemList={mainSkills}/>}
        />
        <Card
          title="Experiences"
          children={
            <RenderList
              itemList={experiences}
              onClick={item => {
                onClickExperience(item.text);
                this.setState({ selectedItem: item, showModal: true });
              }}
            />
          }
        />
        <Card
          title="Personal traits"
          children={<RenderList itemList={keywords}/>}
        />
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
