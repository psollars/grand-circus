import React, { Component } from "react";
import { connect } from 'react-redux';
import { removeItemFromDatabase } from '../actions';

class ListItem extends Component {


	render() {
		return (
			<div className="ListItem">
				<p onClick={this.handleDelete}>X</p>
				<p>Item: {this.props.item.item}</p>
				<p>Price: {this.props.item.price}</p>
			</div>
		);
	}

	handleDelete = () => {
    	this.props.removeItemFromDatabase(this.props.item.id);
	};
	
}

const mapActionsToProps = {
    removeItemFromDatabase
};

export default connect(null, mapActionsToProps)(ListItem);
