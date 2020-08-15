import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from './List';
import Form from './Form';

import { addNewItem } from '../actions';

class ListContainer extends Component {
  render() {
    return (
      <div className="ListContainer">
        <List listItems={this.props.listItems} />
        <Form addNewItemCallback={this.props.addNewItem} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.listItems
  }
}

const mapActionsToProps = {
  addNewItem
}

export default connect(mapStateToProps, mapActionsToProps)(ListContainer);
