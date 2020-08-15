import React, { Component } from 'react';
import Card from './Card';
import Controls from './Controls';
import { connect } from 'react-redux';

// A container component. It pulls data from Redux and can dispatch actions.
class Deck extends Component {

	render() {
		const cardCurrentlyShown = this.props.cards.map((card, index) => {
			if (this.props.currentCard === index) {
				return <Card 	key={index} 
								card={card}
								questionSide={this.props.questionSide}
								selected={index +1}
								cardSet={this.props.cards.length}/>;
			}		
		});

		return (
			<div className="deck">
				{cardCurrentlyShown}
				<Controls />
			</div>
		);
	}
} // end of component

function mapStateToProps(state) {
	return {
		cards: state.cards, 
		currentCard: state.currentCard,
		questionSide: state.questionSide
	};
}

// Connect Redux to this component.
export default connect(mapStateToProps, null)(Deck);
