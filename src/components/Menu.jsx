import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleLanguage } from '../store/actions/actions';
import useWindowDimensions from '../hooks/useWindowDimensions';
import { int } from '../int/ru-eng';
import styles from './Menu.module.css';

export default function Menu({ login, showMobileMenu }) {
  const { width } = useWindowDimensions();
  const lang = useSelector((state) => state.lang);
  const dispatch = useDispatch();

  return (
    <>
      {!showMobileMenu && width < 980 ? (
        ''
      ) : (
        <menu className={styles.menu}>
          <ul className={styles.items}>
            <li>
              <NavLink
                exact
                to="/"
                className={styles.item}
                activeClassName={styles['item-active']}
              >
                {int[lang].Menu.NavLink['/']}
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/favourites"
                className={styles.item}
                activeClassName={styles['item-active']}
              >
                {int[lang].Menu.NavLink['/favourites']}
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/history"
                className={styles.item}
                activeClassName={styles['item-active']}
              >
                {int[lang].Menu.NavLink['/history']}
              </NavLink>
            </li>
            <li>
              <button
                type="button"
                className={styles.language}
                onClick={() => dispatch(toggleLanguage())}
              >
                {lang === 'ru' ? '🏴󠁧󠁢󠁥󠁮󠁧󠁿' : '🇷🇺' }
              </button>
            </li>
          </ul>
          {login()}
        </menu>
      )}
    </>
  );
}
Menu.propTypes = {
  login: PropTypes.func.isRequired,
  showMobileMenu: PropTypes.bool.isRequired,
};
