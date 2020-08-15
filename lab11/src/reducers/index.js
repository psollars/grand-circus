import cardSet from '../cardSet';
import shuffleDeck from './shuffleDeck';
import flipCard from './flipCard';
import prevCard from './prevCard';
import nextCard from './nextCard';
import _ from 'lodash';
const shuffledCards = _.shuffle(cardSet);

const INITIAL_STATE = { 
	cards: shuffledCards, 
	currentCard: 0,
	questionSide: true
};

export default function (state = INITIAL_STATE, action) {
	switch (action.type) {
		case "SHUFFLE_DECK":
			return shuffleDeck(state);
		case "FLIP_CARD":
			return flipCard(state);
		case "NEXT_CARD":
			return nextCard(state);
		case "PREV_CARD":
			return prevCard(state);
		default:
			return state;
	}
}