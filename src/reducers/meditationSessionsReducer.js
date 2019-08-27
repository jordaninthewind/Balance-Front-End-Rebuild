const BASE_URL = process.env.REACT_APP_BASE_URL;

// actions

const setMeditationSessions = meditationSessions => {
  return { type: 'GET_USER_MEDITATION_SESSIONS', meditationSessions };
};

export const resetMeditationSessions = () => {
  return { type: 'RESET_USER_MEDITATION_SESSIONS' };
};

export const setLoading = () => {
  return { type: 'SET_LOADING' };
};

export const getUserMeditationSessions = currentUser => dispatch => {
  dispatch(setLoading());
  fetch(`${BASE_URL}/users/${currentUser.id}/meditation_sessions.json`)
    .then(res => res.json())
    .then(json => {
      dispatch(setMeditationSessions(json));
    });
};

const removeMeditationSession = session => {
  return { type: 'REMOVE_MEDITATION_SESSION', session };
};

export const deleteMeditationSession = (currentUser, session) => dispatch => {
  fetch(`${BASE_URL}/users/${currentUser.id}/meditation_sessions/${session}`, {
    method: 'DELETE'
  }).then(() => {
    dispatch(removeMeditationSession(session));
  });
};

// reducer

const initialState = {
  meditationSessions: [],
  loading: false
};

export default function meditationSessionsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'GET_USER_MEDITATION_SESSIONS':
      return {
        ...state,
        meditationSessions: action.meditationSessions,
        loading: false
      };
    case 'RESET_USER_MEDITATION_SESSIONS':
      return {
        ...state,
        meditationSessions: []
      };
    case 'REMOVE_MEDITATION_SESSION':
      return {
        ...state,
        meditationSessions: state.meditationSessions.filter(sess => {
          return sess.id !== action.session;
        })
      };
    default:
      return state;
  }
}
