/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Cards.module.css';
import Card from './Card';

export default function Cards() {
  const movies = useSelector((state) => state.movies);
  const favouritesIds = useSelector((state) => state.favourites).map(
    (f) => f.id,
  );

  const cardsToRender = () => {
    if (movies.length > 0) {
      return (
        <section className={styles.cards}>
          {movies.map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              inFavourites={favouritesIds.includes(movie.id)}
            />
          ))}
        </section>
      );
    }
    return <section className={styles.notFound}>Movies not found...</section>;
  };

  return <>{cardsToRender()}</>;
}
