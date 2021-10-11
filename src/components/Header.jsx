import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { logout } from '../store/actions/actions';
import Menu from './Menu';
import styles from './Header.module.css';
import logo from '../images/Logo.png';
import logoutImg from '../images/logout.png';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const user = useSelector((state) => state.user);

  const logOutButtonHandler = () => {
    dispatch(logout());
    setShowMobileMenu(false);
  };

  useEffect(() => setShowMobileMenu(false), [location]);

  const userData = () => {
    if (user.name) {
      return (
        <button
          onClick={logOutButtonHandler}
          type="button"
          className={styles.button}
        >
          <span className={styles.buttonText}>{user.name}</span>
          <img src={logoutImg} alt="Logout" />
        </button>
      );
    }
    return (
      <>
        <NavLink
          exact
          to="/sign-in"
          className={styles.button}
          activeClassName={styles.menu__item_active}
        >
          Log In
        </NavLink>
        <NavLink
          exact
          to="/sign-up"
          className={styles.button}
          activeClassName={styles.menu__item_active}
        >
          Register
        </NavLink>
      </>
    );
  };
  return (
    <header>
      <NavLink exact to="/">
        <img src={logo} alt="Логотип Фото дня" className={styles.logo} />
      </NavLink>

      <Menu
        login={userData}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      <button
        className={styles.burgerMenu}
        type="button"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        MENU
      </button>
    </header>
  );
}
