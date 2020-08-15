import cardSet from '../cardSet';
import _ from 'lodash';

const shuffledCards = _.shuffle(cardSet);

export default function shuffleDeck(state) {
	return Object.assign({}, state, {
		cards: shuffledCards,
		currentCard: 0,
		questionSide: true
	});
}