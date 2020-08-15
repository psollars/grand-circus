const INITIAL_STATE = {
  listItems: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RECEIVE_ITEMS':
      return receiveItems(state, action);
    default:
      return state;
  }
}

function receiveItems(state, action) {
  return Object.assign({}, state, {
    listItems: action.items
  });
}
