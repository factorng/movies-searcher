/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './CardInDetails.module.css';

const API_KEY = '5e5a3994082d5957cb6a987f74121734';

export default function CardInDetails() {
  const { id } = useParams();
  const [cardData, setCardData] = useState({});

  const getMovieById = async (id) => {
    try {
      const responce = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
      );
      const json = await responce.json();
      setCardData(json);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovieById(id);
  }, [id]);
  return (
    <div className={styles.card}>
      <h3>{cardData.title}</h3>
      <p>{`Tagline: ${cardData.tagline}`}</p>
      <p>{`Average vote: ${cardData.vote_average}`}</p>
      <p>{`Release date: ${cardData.release_date}`}</p>
      <p>
        Home page:
        <a href={cardData.homepage} alt={`${cardData.title} homepage`}>
          {cardData.homepage}
        </a>
      </p>
      <p>{cardData.overview}</p>
      <img
        alt={`poster to ${cardData.title} movie`}
        src={`https://image.tmdb.org/t/p/w500${cardData.poster_path}`}
        className={styles.poster}
      />
    </div>
  );
}
