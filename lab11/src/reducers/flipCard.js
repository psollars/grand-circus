export default function nextCard(state) {
	return Object.assign({}, state, {
		questionSide: !state.questionSide
	});

};