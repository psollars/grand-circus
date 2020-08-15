import React, { Component } from 'react';

import ListItem from './ListItem';

class List extends Component {
  render() {
    const items = this.props.listItems.map( item => {
      return <ListItem key={item.id} item={item} />
    })
    return (
      <div className="List">
        {items}
      </div>
    );
  }
}

export default List;
