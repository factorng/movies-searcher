/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setInputSearch } from '../store/actions/actions';
import styles from './History.module.css';

export default function History() {
  let history = useSelector((state) => state.history);
  const dispatch = useDispatch();
  history = history.filter(
    (element, pos, self) => self.indexOf(element) === pos,
  );
  return (
    <section className={styles.history}>
      <h3>History</h3>
      <ul className={styles.historyList}>
        {history.map((elem, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={i} className={styles.historyListItem}>
            <NavLink
              exact
              to="/"
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              onClick={() => dispatch(setInputSearch(elem))}
              className={styles.historyListLink}
            >
              {elem}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
}
