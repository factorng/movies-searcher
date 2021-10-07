import API_KEY from '../../utils/apiKey';
import store from '../store';

export function setInputSearch(value) {
  return { type: 'INPUT_SEARCH', payload: value };
}
export function setMovies(value) {
  return { type: 'SET_MOVIES', payload: value };
}
export function addToFavourites(value) {
  const { user } = store.getState();
  const dataFromStorage = localStorage.getItem(user.email);
  if (dataFromStorage) {
    const userData = JSON.parse(dataFromStorage);
    userData.favourites.push(value);
    localStorage.setItem(user.email, JSON.stringify(userData));
  }
  return { type: 'ADD_TO_FAVOURITES', payload: value };
}
export function setFavourites(value) {
  return { type: 'SET_FAVOURITES', payload: value };
}
export function removeFromFavourites(value) {
  const { user } = store.getState();
  const favourites = store.getState().favourites.filter((f) => f.id !== value);
  localStorage.setItem(user.email, JSON.stringify({ user, favourites }));
  return { type: 'SET_FAVOURITES', payload: favourites };
}
export function toggleLoginPopup() {
  return { type: 'TOGGLE_LOGIN_POPUP' };
}
export function toggleAuthPopup() {
  return { type: 'TOGGLE_AUTH_POPUP' };
}
export function createUser(value) {
  const userToLocalStorage = { user: value, favourites: [] };
  if (localStorage.getItem(value.email)) {
    const { favourites } = JSON.parse(localStorage.getItem(value.email));
    userToLocalStorage.favourites = [...favourites];
  }
  localStorage.setItem(value.email, JSON.stringify(userToLocalStorage));

  return { type: 'CREATE_USER', payload: value };
}
export function login(value) {
  return { type: 'LOGIN', payload: value };
}
export function logout() {
  return { type: 'LOGOUT' };
}
export function findMovies() {
  return async (dispatch, getState) => {
    const { inputSearch } = getState();
    try {
      let responce;
      if (inputSearch.length === 0) {
        responce = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
        );
      } else {
        responce = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${inputSearch}&page=1&include_adult=false`,
        );
      }
      const json = await responce.json();
      dispatch(setMovies(json.results));
      console.log('find movies');
    } catch (err) {
      console.log(err);
    }
  };
}
