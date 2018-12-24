const initialState = {
  meditationSessions: []
};

export default function meditationSessionsReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case 'GET_USER_MEDITATION_SESSIONS':
      return {
        ...state,
        meditationSessions: action.meditationSessions
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
