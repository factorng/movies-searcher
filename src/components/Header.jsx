/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { NavLink } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import styles from './Header.module.css';
import logo from '../images/Logo.png';

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const { width } = useWindowDimensions();
  return (
    <header>
      <img src={logo} alt="Логотип Фото дня" className={styles.logo} />
      {!showMobileMenu && width < 900 ? ''
        : (
          <menu className={styles.menu} onClick={() => setShowMobileMenu((prev) => !prev)}>
            <ul className={styles.menu__items}>
              <li>
                <NavLink exact to="/" className={styles.menu__item} activeClassName={styles.menu__item_active}>Main</NavLink>
              </li>
              <li>
                <NavLink exact to="/favourites" className={styles.menu__item} activeClassName={styles.menu__item_active}>Favourites</NavLink>
              </li>
            </ul>
            <button type="button" className={styles.button}>Log In</button>
            <button type="button" className={styles.button}>Register</button>
          </menu>
        )}

      <button className={styles.burgerMenu} type="button" onClick={() => setShowMobileMenu((prev) => !prev)}>MENU</button>
    </header>
  );
}
