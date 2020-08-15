const INITIAL_STATE = {
	adj: "",
	verb: "",
	adv: ""
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "READ_STORY":
			return readStory(state);
		case "CLEAR_FORM":
			return clearForm(state);
		default:
			return state;
	}
}

const readStory = function(state) {
	console.log("readin");
	return state;
};

const clearForm = function(state) {
	return Object.assign({}, state, {
		adj: "",
		verb: "",
		adv: ""
	});
};