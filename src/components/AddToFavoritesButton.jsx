import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { int } from '../int/ru-eng';
import star from '../images/star.png';
import starBorder from '../images/star_border.png';
import styles from './AddToFavoritesButton.module.css';

const AddToFavouritesButton = ({ inFavourites, handleToggleFavouritesButton, movie }) => {
  const lang = useSelector((state) => state.lang);
  return (
    <button
      onClick={() => handleToggleFavouritesButton(movie)}
      type="button"
      className={styles.starButton}
      data-button-tooltip={
        inFavourites ? int[lang].AddToFavouritesButton.button.tooltip.remove
          : int[lang].AddToFavouritesButton.button.tooltip.add
                  }
    >
      <img
        alt={inFavourites ? int[lang].AddToFavouritesButton.button.img.remove
          : int[lang].AddToFavouritesButton.button.img.add}
        src={inFavourites ? star : starBorder}
        className={styles.starImage}
      />
    </button>
  );
};

export default AddToFavouritesButton;

AddToFavouritesButton.propTypes = {
  inFavourites: PropTypes.bool.isRequired,
  handleToggleFavouritesButton: PropTypes.func.isRequired,
  movie: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};
