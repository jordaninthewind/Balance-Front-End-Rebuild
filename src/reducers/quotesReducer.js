const BASE_URL = 'https://balance-backend.herokuapp.com/'

const setQuotes = (quotes) => {
	return { type: "GET_ALL_QUOTES", quotes }
}

export const getAllQuotes = () => dispatch => {
	fetch(`${BASE_URL}/quotes.json`, {mode: 'cors', creditials: 'include'})
		.then(res => res.json())
		.then(json => dispatch(setQuotes(json)))
}

const initialState = {
	quotes: [],
}

export default function quotesReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_QUOTES":
			return {
				...state,
				quotes: action.quotes,
			}
		default:
			return state;
	}

};