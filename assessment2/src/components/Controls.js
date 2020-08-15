import React, { Component } from 'react';
import { connect } from 'react-redux';
import { readStory, clearForm } from '../actions';

class Controls extends Component {

	render() {

		return (
			<div className="Controls">
				<button onClick={this.props.readStory}>Read Story</button>
				<button onClick={this.props.clearForm}>Clear Form</button>
			</div>
		);
	}
} // end of component

const mapActionsToProps = { readStory, clearForm };

export default connect(null, mapActionsToProps)(Controls);