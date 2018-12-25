const BASE_URL = process.env.REACT_APP_BASE_URL;

const SET_CURRENT_USER = 'SET_CURRENT_USER';

const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
const DELETE_USER = 'DELETE_USER';
const GET_USER_MEDITATION_SESSIONS = 'GET_USER_MEDITATION_SESSIONS';
const RESET_USER_MEDITATION_SESSIONS = 'RESET_USER_MEDITATION_SESSIONS';
const REMOVE_MEDITATION_SESSION = 'REMOVE_MEDITATION_SESSION';
const GET_ALL_QUOTES = 'GET_ALL_QUOTES';

// users actions

export const setCurrentUser = user => {
    return { type: SET_CURRENT_USER, user };
  };
  
  export const loginUser = (email, password) => dispatch => {
    dispatch(userErrorMessage({ error_message: 'Logging in user...' }));
    fetch(`${BASE_URL}/login`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ login_user: { email, password } })
    })
      .then(res => res.json())
      .then(json => {
        if (json.name) {
          dispatch(setCurrentUser(json));
          setUserInLocalStorage(json);
          dispatch(userErrorMessage({ error_message: '' }));
        } else {
          dispatch(userErrorMessage(json));
        }
      })
      .catch(res => console.log(res));
  };
  
  const userErrorMessage = json => {
    let errorMessage = json.error_message;
    return { type: SET_ERROR_MESSAGE, errorMessage };
  };
  
  export const createUser = (
    name,
    lastName,
    email,
    password,
    location
  ) => dispatch => {
    dispatch(userErrorMessage({ error_message: 'Registering user...' }));
    let last_name = lastName;
    fetch(`${BASE_URL}/users`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        new_user: { name, last_name, email, password, location }
      })
    })
      .then(res => res.json())
      .then(json => {
        if (json.name) {
          dispatch(setCurrentUser(json));
          setUserInLocalStorage(json);
        } else {
          dispatch(userErrorMessage(json));
        }
      })
      .catch(res => console.log(res));
  };
  
  const setUserInLocalStorage = user => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  };
  
  export const checkCurrentUserStorage = () => dispatch => {
    if (localStorage.currentUser) {
      dispatch(setCurrentUser(JSON.parse(localStorage.currentUser)));
    }
  };
  
  export const deleteCurrentUser = () => {
    localStorage.removeItem('currentUser');
    return { type: DELETE_USER };
  };
  
  export const deleteUser = user => dispatch => {
    fetch(`${BASE_URL}/users/${user.id}`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(json => dispatch(deleteCurrentUser()));
  };
  
  export const updateUser = user => dispatch => {
    fetch(`${BASE_URL}/users/${user.id}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify({ user })
    });
  };  

// session actions

const setMeditationSessions = meditationSessions => {
  return { type: GET_USER_MEDITATION_SESSIONS, meditationSessions };
};

export const resetMeditationSessions = () => {
  return { type: RESET_USER_MEDITATION_SESSIONS };
};

export const getUserMeditationSessions = currentUser => dispatch => {
  fetch(`${BASE_URL}/users/${currentUser.id}/meditation_sessions.json`)
    .then(res => res.json())
    .then(json => {
      dispatch(setMeditationSessions(json));
    });
};

const removeMeditationSession = session => {
  return { type: REMOVE_MEDITATION_SESSION, session };
};

export const deleteMeditationSession = (currentUser, session) => dispatch => {
  fetch(`${BASE_URL}/users/${currentUser.id}/meditation_sessions/${session}`, {
    method: 'DELETE'
  }).then(() => {
    dispatch(removeMeditationSession(session));
  });
};

// quotes actions

const setQuotes = quotes => {
  return { type: GET_ALL_QUOTES, quotes };
};

export const getAllQuotes = () => dispatch => {
  fetch(`${BASE_URL}/quotes.json`)
    .then(res => res.json())
    .then(json => dispatch(setQuotes(json)));
};