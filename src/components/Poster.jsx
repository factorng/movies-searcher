import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import placeholder from '../images/no-cover.png';

function Poster({ poster, name }) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        alt={`poster to ${name} movie`}
        src={`${poster}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
      />
    </div>
  );
}

export default Poster;

Poster.propTypes = {
  poster: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
