function rootReducer(state, action) {
  switch (action.type) {
    case 'INPUT_SEARCH': return { ...state, inputSearch: action.payload };
    case 'SET_MOVIES': return { ...state, movies: action.payload };
    case 'ADD_TO_FAVOURITES': return { ...state, favourites: [...state.favourites, action.payload] };
    case 'REMOVE_FROM_FAVOURITES': return { ...state, favourites: state.favourites.filter((f) => f.id !== action.payload) };
    default: return state;
  }
}
export default rootReducer;
