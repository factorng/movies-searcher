import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { int } from '../int/ru-eng';
import {
  addToFavourites,
  removeFromFavourites,
} from '../store/actions/actions';
import styles from './Card.module.css';
import AddToFavouritesButton from './AddToFavoritesButton';
import Poster from './Poster';

export default function Card({ movie, inFavourites }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    poster, name, rating, id,
  } = movie;
  const lang = useSelector((state) => state.lang);
  const handleToggleFavouritesButton = (favouriteMovie) => (
    inFavourites ? dispatch(removeFromFavourites(favouriteMovie.id))
      : dispatch(addToFavourites(favouriteMovie)));

  return (
    <div className={styles.card}>
      <NavLink exact to={`/film/${id}`} className={styles.more}>
        <Poster poster={poster} name={name} />
      </NavLink>
      <div className={styles.description}>
        <p className={styles.title}>{name}</p>
        <p className={styles.raiting}>
          {`${int[lang].Card.raiting} ${Number.parseFloat(rating).toFixed(1)}`}
        </p>
      </div>
      {user.name
        && (
        <AddToFavouritesButton
          inFavourites={inFavourites}
          movie={movie}
          handleToggleFavouritesButton={handleToggleFavouritesButton}
        />
        )}
    </div>
  );
}
Card.propTypes = {
  movie: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
  inFavourites: PropTypes.bool.isRequired,
};
