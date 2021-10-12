import React from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import styles from './Cards.module.css';

export default function Favourites() {
  const favourites = useSelector((state) => state.favourites);
  return (
    <>
      {favourites.length > 0 ? (
        <section className={styles.cards}>
          {favourites.map((movie) => (
            <Card movie={movie} key={movie.id} inFavourites />
          ))}
        </section>
      ) : (
        <section className={styles.notFound}>
          Nothing added to favourites...
        </section>
      )}
    </>
  );
}
