import store from '../store';
import { getMoviesByQuery } from '../../utils/api';

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
export function closeAllPopups() {
  return { type: 'CLOSE_POPUPS' };
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
    const movies = await getMoviesByQuery(inputSearch);
    dispatch(setMovies(movies));
  };
}
export function toggleLanguage() {
  return { type: 'LANGUAGE' };
}
