import React, { Component } from 'react';

class Card extends Component {

	render() {
		const cardSide = this.props.questionSide ? this.props.card.question : this.props.card.answer ;

		return (
			<div className="card">
				<p className="cardContent">{cardSide}</p>
				<p className="cardIndex">{this.props.selected} | {this.props.cardSet}</p>
			</div>
		);
	}
}

export default Card;