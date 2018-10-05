const BASE_URL = 'https://balance-backend-v2.herokuapp.com'
// const BASE_URL = 'http://localhost:3000'

// actions

const setMeditationSessions = (meditationSessions) => {
	return { type: "GET_USER_MEDITATION_SESSIONS", meditationSessions }
}

export const resetMeditationSessions = () => {
	return { type: "RESET_USER_MEDITATION_SESSIONS" }
}

export const getUserMeditationSessions = currentUser => dispatch => {
	fetch(`${BASE_URL}/users/${currentUser.id}/meditation_sessions.json`)
		.then(res => res.json() )
		.then(json => { dispatch(setMeditationSessions(json))})
}

const removeMeditationSession = session => {
	return { type: "REMOVE_MEDITATION_SESSION", session}
}

export const deleteMeditationSession = (currentUser, session) => dispatch => {
	fetch(`${BASE_URL}/users/${currentUser.id}/meditation_sessions/${session}`, {
		method: "DELETE"
		})
		.then( () => { dispatch(removeMeditationSession(session)) } )
}

// reducer


const initialState = {
	meditationSessions: [],
}

export default function meditationSessionsReducer(state = initialState, action) {
	switch (action.type) {
		case "GET_USER_MEDITATION_SESSIONS":
			return {
				...state,
				meditationSessions: action.meditationSessions,
			}
		case "RESET_USER_MEDITATION_SESSIONS":
			return {
				...state,
				meditationSessions: [],
			}
		case "REMOVE_MEDITATION_SESSION":
			return {
				...state,
				meditationSessions: state.meditationSessions.filter(sess => { return sess.id !== action.session }),
			}
		default:
			return state;
	}
}