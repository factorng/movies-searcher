import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavourites,
  removeFromFavourites,
} from '../store/actions/actions';
import styles from './Card.module.css';
import star from '../images/star.png';
import starBorder from '../images/star_border.png';
import placeholder from '../images/no-cover.png';

export default function Card({ movie, inFavourites }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {
    poster_path: poster, title, vote_average: raiting, id,
  } = movie;

  const handleToggleFavouritesButton = (favouriteMovie) => {
    if (!inFavourites) {
      dispatch(addToFavourites(favouriteMovie));
    } else {
      dispatch(removeFromFavourites(favouriteMovie.id));
    }
  };

  const buttonFavourites = () => user.name && (
  <button
    onClick={() => handleToggleFavouritesButton(movie)}
    type="button"
    className={styles.starButton}
    data-button-tooltip={
          inFavourites ? 'remove from favouretes' : 'add to favouretes'
        }
  >
    <img
      alt="star"
      src={inFavourites ? star : starBorder}
      className={styles.starImage}
    />
  </button>
  );

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        alt={`poster to ${title} movie`}
        src={`https://image.tmdb.org/t/p/w300${poster}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
      />

      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <p className={styles.raiting}>
          Film raiting:
          {' '}
          {raiting}
        </p>
      </div>
      <NavLink exact to={`/film/${id}`} className={styles.more}>
        More...
      </NavLink>
      {buttonFavourites()}
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
