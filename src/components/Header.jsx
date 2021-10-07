import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  toggleAuthPopup,
  toggleLoginPopup,
  logout,
} from '../store/actions/actions';
import Menu from './Menu';
import styles from './Header.module.css';
import logo from '../images/Logo.png';
import logoutImg from '../images/logout.png';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const registerButtonHandler = () => {
    dispatch(toggleAuthPopup());
    setShowMobileMenu(false);
  };
  const loginButtonHandler = () => {
    dispatch(toggleLoginPopup());
    setShowMobileMenu(false);
  };
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
        <button
          onClick={loginButtonHandler}
          type="button"
          className={styles.button}
        >
          Log In
        </button>
        <button
          onClick={registerButtonHandler}
          type="button"
          className={styles.button}
        >
          Register
        </button>
      </>
    );
  };
  return (
    <header>
      <img src={logo} alt="Логотип Фото дня" className={styles.logo} />
      <Menu login={userData} showMobileMenu={showMobileMenu} />
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
