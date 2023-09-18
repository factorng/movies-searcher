function rootReducer(state, action) {
  switch (action.type) {
    case 'INPUT_SEARCH':
      return {
        ...state,
        inputSearch: action.payload,
        history: action.payload
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
        popupsIsOpen: { login: false, auth: !state.popupsIsOpen.auth },
      };
    case 'TOGGLE_LOGIN_POPUP':
      return {
        ...state,
        popupsIsOpen: {
          auth: false,
          login: !state.popupsIsOpen.login,
        },
      };
    case 'CLOSE_POPUPS':
      return {
        ...state,
        popupsIsOpen: {
          auth: false,
          login: false,
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
    case 'LANGUAGE':
      return {
        ...state,
        lang: state.lang === 'ru' ? 'eng' : 'ru',
      };
    default:
      return state;
  }
}
export default rootReducer;
