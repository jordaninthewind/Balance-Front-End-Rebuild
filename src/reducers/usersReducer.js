// const BASE_URL = 'https://balance-backend.herokuapp.com'
const BASE_URL = 'localhost:3000/'

const initialState = {
	users: [],
	currentUser: null,
}

const setUsers = (users) => {
	return { type: "GET_ALL_USERS", users }
}

export const getAllUsers = () => dispatch => {
	return fetch(`${BASE_URL}/users.json`, {mode: 'cors', creditials: 'include'})
		.then(res => res.json())
		.then(json => dispatch(setUsers(json)))
}

export const setCurrentUser = (user) => {
	return { type: "SET_CURRENT_USER", user }
}

export const loginUser = (email, password) => dispatch => {
	fetch(`${BASE_URL}/login`, {
		method: "POST",
		body: JSON.stringify({login_user: {email: email, password: password}})
	})
	.then(res => res.json())
	.then(json => dispatch(setCurrentUser()))
	.catch(res => console.log(res))
}

export const createUser = (name, location) => dispatch => {
	fetch(`${BASE_URL}/users`, {
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json'
	      },
	      method: "POST",
	      body: JSON.stringify({new_user: {name: name, location: location}})
	    })
	    .then(res => res.json() )
	    .then(json => dispatch(setCurrentUser(json)))
	    .catch(res => console.log(res))
}

export const deleteCurrentUser = () => {
	return { type: "DELETE_USER" }
}

export const deleteUser = (user) => dispatch => {
	fetch(`${BASE_URL}/users/${user.id}`, {
		headers: {'Content-Type': 'application/json'},
		method: "DELETE"
		})
		.then(res => { return res.json() })
		.then(json => dispatch(deleteCurrentUser()))
}

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_ALL_USERS":
			return {
				...state,
				users: action.users,
			}
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
		default:
			return state;
	}
};