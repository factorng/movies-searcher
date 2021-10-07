import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from './Menu.module.css';

export default function Menu({ login, showMobileMenu }) {
  const { width } = useWindowDimensions();
  return (
    <>
      {!showMobileMenu && width < 980 ? (
        ''
      ) : (
        <menu className={styles.menu}>
          <ul className={styles.menu__items}>
            <li>
              <NavLink
                exact
                to="/"
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >
                Main
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/favourites"
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >
                Favourites
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to="/history"
                className={styles.menu__item}
                activeClassName={styles.menu__item_active}
              >
                History
              </NavLink>
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
