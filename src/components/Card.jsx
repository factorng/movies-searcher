import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToFavourites, removeFromFavourites } from '../store/actions/actions';
import styles from './Card.module.css';
import star from '../images/star.png';
import starBorder from '../images/star_border.png';
import placeholder from '../images/no-cover.png';

export default function Card({ movie, inFavourites }) {
  const dispatch = useDispatch();
  const { poster_path: poster, title, raiting } = movie;

  const handleToggleFavouritesButton = (favouriteMovie) => (
    !inFavourites ? dispatch(addToFavourites(favouriteMovie))
      : dispatch(removeFromFavourites(favouriteMovie.id))
  );
  const buttonFavourites = () => (
    <button
      onClick={() => handleToggleFavouritesButton(movie)}
      type="button"
      className={styles.starButton}
      data-button-tooltip={inFavourites ? 'remove from favouretes' : 'add to favouretes'}
    >
      <img alt="star" src={inFavourites ? star : starBorder} className={styles.starImage} />
    </button>
  );

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        alt={`poster for ${title}`}
        src={`https://image.tmdb.org/t/p/w300${poster}`}
        onError={(e) => { e.target.onerror = null; e.target.src = placeholder; }}
      />
      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <p className={styles.raiting}>{raiting}</p>
      </div>
      {buttonFavourites()}
    </div>

  );
}
Card.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
  inFavourites: PropTypes.bool.isRequired,
};
