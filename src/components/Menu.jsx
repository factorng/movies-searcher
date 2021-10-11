import React, { useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from './Menu.module.css';

export default function Menu({ login, showMobileMenu, setShowMobileMenu }) {
  const { width } = useWindowDimensions();
  const menuRef = useRef('');

  useEffect(() => {
    const clickMenuCLose = (event) => {
      const target = event.target.className;
      if (!target.toString().includes('Menu')) {
        setShowMobileMenu(false);
      }
    };
    document.addEventListener('click', clickMenuCLose);
    return () => document.removeEventListener('click', clickMenuCLose);
  }, []);
  return (
    <>
      {!showMobileMenu && width < 980 ? (
        ''
      ) : (
        <menu className={styles.menu} ref={menuRef}>
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
  setShowMobileMenu: PropTypes.func.isRequired,
};
