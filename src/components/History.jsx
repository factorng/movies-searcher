/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setInputSearch } from '../store/actions/actions';
import { int } from '../int/ru-eng';
import styles from './History.module.css';

export default function History() {
  const history = useSelector((state) => state.history);
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <section className={styles.history}>
      <h3>{int[lang].History.title}</h3>
      <ul className={styles.list}>
        {history.map((elem) => (
          <li key={elem} className={styles.item}>
            <NavLink
              exact
              to="/"
              key={elem}
              onClick={() => dispatch(setInputSearch(elem))}
              className={styles.link}
            >
              {elem}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
