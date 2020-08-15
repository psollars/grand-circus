const INITIAL_STATE = {
	posts: [],
	isLoading: true,
	isGrid: false
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "REQUEST_REDDIT":
			return Object.assign({}, state, {
				posts: [],
				isLoading: true
			});
		case "RECEIVE_REDDIT":
			return Object.assign({}, state, {
				posts: action.posts,
				isLoading: false
			});
		case "LIST_GRID":
			return Object.assign({}, state, {
				isGrid: !state.isGrid
			});
		default:
			return state;
	}
}
