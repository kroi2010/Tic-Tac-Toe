const initialState = {
  gameActive: false,
  players: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_PLAYERS':
      return Object.assign({}, state, {
        players: action.payload,
      });
    case 'START_GAME':
      return Object.assign({}, state, {
        gameActive: true,
      });
    case 'END_GAME':
      return Object.assign({}, state, {
        gameActive: false,
      });
    default:
      return state;
  }
}
