/* eslint-disable max-len */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Cards.module.css';
import Card from './Card';

export default function Cards() {
  const movies = useSelector((state) => state.movies);
  const favourites = useSelector((state) => state.favourites);
  const favouritesIds = useSelector((state) => state.favourites).map(
    (f) => f.id,
  );
  const location = useLocation();

  const cardsToRender = () => {
    if (location.pathname === '/' && movies.length > 0) {
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
    if (location.pathname === '/favourites' && favourites.length > 0) {
      return (
        <section className={styles.cards}>
          {favourites.map((movie) => (
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
