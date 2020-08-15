import React, { Component } from 'react';
import { connect } from 'react-redux';

class Story extends Component {

	render() {

		return (
			<div className="Story">
				<p>One fine day, my trusty dog woke up to find a {this.props.adj} cat. The cat was {this.props.verb} very {this.props.adv}. What a weird morning...</p>
			</div>
		);
	}
} // end of component

function mapStateToProps(state) {
	return {
		adj: state.adj,
		verb: state.verb,
		adv: state.adv
	};
}

// Connect Redux to this component.
export default connect(mapStateToProps, null)(Story);
