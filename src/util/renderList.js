import React from 'react';
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from 'react-sortable-hoc';
import PropTypes from 'prop-types';

class RenderList extends React.Component {
  constructor(props) {
    super();
    this.state = { list: props.itemList };
  }

  onSortEnd = ({ oldIndex, newIndex }, e) => {
    if (!e.target.parentNode.className) {
      this.setState({
        list: this.state.list.filter((item, index) => index !== oldIndex)
      });
    } else {
      this.setState({
        list: arrayMove(this.state.list, oldIndex, newIndex)
      });
    }
  };

  render() {
    const { itemList, onClick } = this.props;
    const SortableItem = SortableElement(({ item }) => (
      <div
        draggable="true"
        onDragStart={this.onDragStart}
        className="card--item__container"
      >
        <a
          onClick={() => onClick(item)}
          target="_blank"
          className="card--item__container-content"
        >
          {item.text}
        </a>
      </div>
    ));
    const SortableList = SortableContainer(({ items }) => {
      return (
        <div>
          {items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} item={value} />
          ))}
        </div>
      );
    });
    return (
      <SortableList
        distance={1}
        items={this.state.list}
        onSortEnd={this.onSortEnd}
      />
    );
  }
}

RenderList.propTypes = {
  itemList: PropTypes.array.isRequired,
  onClick: PropTypes.func
};
RenderList.defaultProps = {
  onClick: () => {}
};
export default RenderList;
