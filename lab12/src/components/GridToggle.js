import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gridToggle } from '../actions';

class GridToggle extends Component {

	render() {

		const classExtension = this.props.isGrid ? "fa fa-2x fa-bars" : "fa fa-2x fa-th";

		return (
			<i className={"GridToggle " + classExtension} onClick={this.props.gridToggle}></i>
		);
	}
}

const mapActionsToProps = {
	gridToggle
};

export default connect(null, mapActionsToProps)(GridToggle);
