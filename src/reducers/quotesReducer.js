const initialState = {
  quotes: []
};

export default function quotesReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_QUOTES':
      return {
        ...state,
        quotes: action.quotes
      };
    default:
      return state;
  }
}
