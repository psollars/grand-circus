import React, { Component } from 'react';

class ListItem extends Component {
  render() {

    return (
      <div className="ListItem">
        <h4>
          {this.props.item.name}
          &nbsp;
          &nbsp;
          &nbsp;
          &nbsp;
          <em>{this.props.item.price}</em>
        </h4>
      </div>
    );
  }
}

export default ListItem;
