export function shuffleDeck() {
	return {
		type: "SHUFFLE_DECK"
	};
}

export function flipCard(state, index) {
	return {
		type: "FLIP_CARD",
		index
	};
}

export function nextCard(state, index) {
	return {
		type: "NEXT_CARD",
		index
	};
}

export function prevCard(state, index) {
	return {
		type: "PREV_CARD",
		index
	};
}
