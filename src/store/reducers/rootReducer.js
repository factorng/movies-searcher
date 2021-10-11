function rootReducer(state, action) {
  switch (action.type) {
    case 'INPUT_SEARCH':
      return {
        ...state,
        inputSearch: action.payload,
        history:
          action.payload && state.user.name
            ? [...state.history, action.payload]
            : [...state.history],
      };
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'ADD_TO_FAVOURITES':
      return {
        ...state,
        favourites: [...state.favourites, action.payload && action.payload],
      };
    case 'SET_FAVOURITES':
      return { ...state, favourites: [...action.payload] };
    case 'TOGGLE_AUTH_POPUP':
      return {
        ...state,
        popupsIsOpen: { ...state.popupsIsOpen, auth: !state.popupsIsOpen.auth },
      };
    case 'TOGGLE_LOGIN_POPUP':
      return {
        ...state,
        popupsIsOpen: {
          ...state.popupsIsOpen,
          login: !state.popupsIsOpen.login,
        },
      };
    case 'CREATE_USER':
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case 'LOGIN':
      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          password: action.payload.password,
        },
      };
    case 'LOGOUT':
      return {
        ...state,
        user: { name: '', email: '', password: '' },
        favourites: [],
      };
    case 'DELETE_HISTORY':
      return { ...state, history: [] };
    default:
      return state;
  }
}
export default rootReducer;
