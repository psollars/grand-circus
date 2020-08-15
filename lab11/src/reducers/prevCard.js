export default function nextCard(state) {
	if (state.currentCard === 0) {
		return state;
	}

	return Object.assign({}, state, {
		currentCard: state.currentCard - 1,
		questionSide: true
	});

};