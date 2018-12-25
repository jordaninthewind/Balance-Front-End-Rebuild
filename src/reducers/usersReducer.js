const initialState = {
  currentUser: null,
  errorMessage: ''
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.user
      };
    case 'DELETE_USER':
      return {
        ...state,
        currentUser: null
      };
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    default:
      return state;
  }
}
