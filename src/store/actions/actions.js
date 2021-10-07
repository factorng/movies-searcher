/* eslint-disable import/prefer-default-export */
// export function increase_counter() {
//   return {
//     type: '+',
//   };
// }

// export function decrease_counter() {
//   return {
//     type: '-',
//   };
// }

// export function reset_counter() {
//   return {
//     type: 'RESET',
//   };
// }

// export function set_counter(value) {
//   return {
//     type: 'SET',
//     payload: parseInt(value),
//   };
// }
const API_KEY = '5e5a3994082d5957cb6a987f74121734';
// const inputSearch = 'robocop';

export function setInputSearch(value) {
  return { type: 'INPUT_SEARCH', payload: value };
}
export function setMovies(value) {
  return { type: 'SET_MOVIES', payload: value };
}
export function addToFavourites(value) {
  return { type: 'ADD_TO_FAVOURITES', payload: value };
}
export function removeFromFavourites(value) {
  return { type: 'REMOVE_FROM_FAVOURITES', payload: value };
}
export function findMovies() {
  return async (dispatch, getState) => {
    const { inputSearch } = getState();
    try {
      let responce;
      if (inputSearch.length === 0) {
        responce = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
      } else {
        responce = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputSearch}&page=1&include_adult=false`);
      }
      const json = await responce.json();
      dispatch(setMovies(json.results));
      console.log(json);
    } catch (err) {
      console.log(err);
    }
  };
}
