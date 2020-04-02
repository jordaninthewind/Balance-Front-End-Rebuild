// todo: build out better error handling
const graphQlFetch = query => {
  return fetch(process.env.REACT_APP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
};

// actions

const setMeditationSessions = meditationSessions => {
  return { type: "GET_USER_MEDITATION_SESSIONS", meditationSessions };
};

export const resetMeditationSessions = () => {
  return { type: "RESET_USER_MEDITATION_SESSIONS" };
};

export const setLoading = () => {
  return { type: "SET_LOADING" };
};

const removeMeditationSession = session => {
  return { type: "REMOVE_MEDITATION_SESSION", session };
};

export const saveUserMeditationSession = (user, duration, timeStarted) => dispatch => {
  const query = `
  mutation {
    insert_meditation_sessions(objects: {duration: ${duration}, time_started: ${timeStarted}, user_id: ${JSON.stringify(user)}}) {
      returning {
        id
      }
    }
  }
  `

  graphQlFetch(query)
    .then(res => {
      if (res.errors) throw new Error(res.errors)
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    });
}

export const getUserMeditationSessions = userId => dispatch => {
  const query = `
  query {
    meditation_sessions(where: {user_id: {_eq: ${JSON.stringify(userId)}}}) {
      duration
      date: time_started
      id
    }
  }
  `;

  dispatch(setLoading());

  graphQlFetch(query)
    .then(res => res.json())
    .then(json => {
      if (json.errors) throw new Error(json.errors)

      // transform date to string -- TODO: update for more versatile datatype
      json.data.meditation_sessions.forEach(med => {
        if (!med.date) return;
        med.date = (new Date(med.date)).toString()
      })

      dispatch(setMeditationSessions(json.data.meditation_sessions));
    })
    .catch(err => console.log(err));
};

export const deleteMeditationSession = (session) => dispatch => {
  const query = `
  mutation DeleteMeditationSession {
    delete_meditation_sessions(where: {id: {_eq: ${session}}}) {
      returning {
        id
      }
    }
  }
  `;

  graphQlFetch(query)
    .then(res => res.json())
    .then(json => {
      if (json.errors) throw new Error('Something went wrong while deleting the session. Please try again.')
      dispatch(removeMeditationSession(session));
    })
    .catch(err => {
      console.log(err);
    });
};

// reducer

const initialState = {
  meditationSessions: [],
  errors: {},
  loading: false
};

export default function meditationSessionsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: true
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors
      };
    case "CLEAR_ERRORS":
      return {
        ...state,
        errors: {}
      };
    case "GET_USER_MEDITATION_SESSIONS":
      return {
        ...state,
        meditationSessions: action.meditationSessions,
        loading: false
      };
    case "RESET_USER_MEDITATION_SESSIONS":
      return {
        ...state,
        meditationSessions: []
      };
    case "REMOVE_MEDITATION_SESSION":
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
