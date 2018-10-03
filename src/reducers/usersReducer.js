// const BASE_URL = 'https://balance-backend.herokuapp.com'
const BASE_URL = 'http://localhost:3000'

const initialState = {
	currentUser: null,
	errorMessage: "",
}

export const setCurrentUser = user => {
	return { type: "SET_CURRENT_USER", user }
}

export const loginUser = (email, password) => dispatch => {
	fetch(`${BASE_URL}/login`, {
		headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
		method: "POST",
		body: JSON.stringify( { login_user: { email, password } } )
	})
	.then(res => res.json())
	.then(json => {
		if (json.name) {
			dispatch(setCurrentUser(json));
			setUserInLocalStorage(json);
			dispatch(userErrorMessage({error_message: ""}))
		} else {
			dispatch(userErrorMessage(json));
		}
	})
	.catch(res => console.log(res))
}

const userErrorMessage = json => {
	let errorMessage = json.error_message;
	return { type: "SET_ERROR_MESSAGE", errorMessage }
}

export const createUser = (name, lastName, email, password, location) => dispatch => {
	let last_name = lastName;
	fetch(`${BASE_URL}/users`, {
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	      method: "POST",
	      body: JSON.stringify( { new_user: { name, last_name, email, password, location } } )
	    })
	    .then( res => res.json() )
	    .then( json => {
	    	if (json.name) {
	    		dispatch(setCurrentUser(json));
	    		setUserInLocalStorage(json);
	    	} else {
	    		dispatch(userErrorMessage(json));
	    	}
	    })
	    .catch(res => console.log(res))
}

const setUserInLocalStorage = (user) => {
	localStorage.setItem('currentUser', JSON.stringify(user) );
}

export const checkCurrentUserStorage = () => dispatch => {
	if (localStorage.currentUser) {
		dispatch(setCurrentUser(JSON.parse(localStorage.currentUser)))
	}
}

export const deleteCurrentUser = () => {
	localStorage.removeItem('currentUser');
	return { type: "DELETE_USER" }
}

export const deleteUser = user => dispatch => {
	fetch(`${BASE_URL}/users/${user.id}`, {
		headers: {'Content-Type': 'application/json'},
		method: "DELETE"
		})
		.then(res => res.json() )
		.then(json => dispatch(deleteCurrentUser()))
}

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case "SET_CURRENT_USER":
			return { 
				...state,
				currentUser: action.user,
			}
		case "DELETE_USER":
			return {
				...state,
				currentUser: null,
			}
		case "SET_ERROR_MESSAGE":
			return {
				...state,
				errorMessage: action.errorMessage,
			}
		default:
			return state;
	}
};