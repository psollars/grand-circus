export default function nextCard(state) {
	if (state.currentCard === state.cards.length - 1) {
		return state;
	}

	return Object.assign({}, state, {
		currentCard: state.currentCard + 1,
		questionSide: true
	});

};