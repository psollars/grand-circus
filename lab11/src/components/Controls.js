import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffleDeck, flipCard, nextCard, prevCard } from '../actions';

class Controls extends Component {

	render() {

		return (
			<div className="controls">
				<div onClick={this.props.prevCard}>Previous Card</div>
				<div onClick={this.props.shuffleDeck}>Shuffle Deck</div>
				<div onClick={this.props.flipCard}>Flip Card</div>
				<div onClick={this.props.nextCard}>Next Card</div>
			</div>
		);
	}
} // end of component

const mapActionsToProps = { shuffleDeck, flipCard, nextCard, prevCard };

export default connect(null, mapActionsToProps)(Controls);