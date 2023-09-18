/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { int } from '../int/ru-eng';
import { getMovieById } from '../utils/api';
import placeholder from '../images/no-cover.png';
import styles from './CardInDetails.module.css';

export default function CardInDetails() {
  const { id } = useParams();
  const [cardData, setCardData] = useState({});
  const lang = useSelector((state) => state.lang);
  useEffect(() => {
    (async function () {
      if (id) {
        setCardData(await getMovieById(id));
      }
    }());
  }, [id]);
  return cardData.rating ? (
    <div className={styles.card}>
      <h3 className={styles.title}>{cardData.name}</h3>
      <img
        alt={`постер к фильму ${cardData.name}`}
        src={`${cardData?.poster?.url}`}
        className={styles.poster}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholder;
        }}
      />
      <p>{`${int[lang].CardInDetails.description} ${cardData.description}`}</p>
      <p>{`${int[lang].CardInDetails.rating} ${Number.parseFloat(cardData.rating.kp).toFixed(1)}`}</p>
      <p>{`${int[lang].CardInDetails.year} ${cardData?.year ? `${cardData.year} год` : 'неизвестно'}`}</p>
      <p>{`${int[lang].CardInDetails.country} ${cardData.countries.map((country) => country.name).join(', ')}`}</p>
    </div>
  ) : ('');
}
