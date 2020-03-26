// todo: build out better error handling

const graphQlFetch = query => {
  return fetch("https://balance-graphql-backend.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query })
  });
};

const BASE_URL = process.env.REACT_APP_BASE_URL;

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

export const saveUserMeditationSession = (currentUser, duration) => dispatch => {
  console.log(currentUser)
  console.log(duration)
  // debugger;
  const query = `
  mutation AddMeditationSession {
    insert_meditation_sessions(objects: {duration: 1000, user_id: 10}) {
      returning {
        id
      }
    }
  }
  `
  graphQlFetch(query)
    // .then(() => alert("Saved session!"))
    .then(res => console.log(res))
    .then(res => this.toggleModal())
    .catch(res => console.log(res));
}

export const getUserMeditationSessions = currentUser => dispatch => {
  // todo: update userId to firebase userid in state
  const userId = 10;
  const query = `
  query GetMeditationSessions {
    meditation_sessions(where: {user_id: {_eq: ${userId}}}) {
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
      dispatch(setMeditationSessions(json.data.meditation_sessions));
    })
    .catch(err => console.log(err));
};

export const deleteMeditationSession = (currentUser, session) => dispatch => {
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
      if (json.errors) throw new Error('this a problem')
      dispatch(removeMeditationSession(session));
    })
    .catch(err => {
      console.log(err);
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
    case "SET_LOADING":
      return {
        ...state,
        loading: true
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
