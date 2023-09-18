import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import {
  toggleAuthPopup,
  toggleLoginPopup,
  logout,
} from '../store/actions/actions';
import { int } from '../int/ru-eng';
import Menu from './Menu';
import Search from './Search';
import Button from './Button';
import styles from './Header.module.css';
import logoutImg from '../images/logout.png';

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const user = useSelector((state) => state.user);
  const lang = useSelector((state) => state.lang);
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
        <Button type="button" title={user.name} handleClick={logOutButtonHandler} styleClass={styles.button}>
          <img src={logoutImg} alt={int[lang].Header.Button.logOut} />
        </Button>
      );
    }
    return (
      <>
        <Button type="button" title={int[lang].Header.Button.login} handleClick={loginButtonHandler} />
        <Button type="button" title={int[lang].Header.Button.register} handleClick={registerButtonHandler} styleClass={styles.button} />
      </>
    );
  };
  return (
    <header>
      <NavLink
        exact
        to="/"
        className={styles.logo}
        activeClassName={styles['item-active']}
      >
        Moovies
      </NavLink>
      <Search />
      <Menu login={userData} showMobileMenu={showMobileMenu} />
      <button
        className={styles.burger}
        type="button"
        onClick={() => setShowMobileMenu((prev) => !prev)}
      >
        {int[lang].Header.Button.burger}
      </button>
    </header>
  );
}
