/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PopupWithForm from './PopupWithForm';
import useFormWithValidation from '../hooks/useFormWithValidation';
import {
  toggleLoginPopup,
  createUser,
  setFavourites,
} from '../store/actions/actions';
import { int } from '../int/ru-eng';
import styles from './PopupWithForm.module.css';

function PopupLogin() {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popupsIsOpen.login);
  const lang = useSelector((state) => state.lang);

  function handleClose() {
    dispatch(toggleLoginPopup());
    resetForm({ email: '', password: '' });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    if (!email || !password) {
      return;
    }
    const userFromLocalStorage = JSON.parse(localStorage.getItem(email));
    if (userFromLocalStorage) {
      if (userFromLocalStorage.user.password === password) {
        dispatch(createUser(userFromLocalStorage.user));
        dispatch(setFavourites(userFromLocalStorage.favourites));
        handleClose();
      } else {
        alert(int[lang].PopupLogin.wrongPassword);
      }
    } else {
      alert(int[lang].PopupLogin.userNotFound);
    }
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title={int[lang].PopupLogin.PopupWithForm.title}
      onSubmit={handleSubmit}
      buttonText={int[lang].PopupLogin.PopupWithForm.buttonText}
      submitEnable={isValid}
    >
      <>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">{int[lang].PopupLogin.Fields.labels.email}</label>
          <input
            id="email"
            className={styles.input}
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            minLength="5"
            maxLength="40"
            placeholder={int[lang].PopupLogin.Fields.input.placeholder.email}
            pattern="^[^@]+@[^@.]+\.[^@]+$"
            required
          />
          <span className={styles.error}>{errors.email || ''}</span>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">{int[lang].PopupLogin.Fields.labels.password}</label>
          <input
            id="password"
            className={styles.input}
            type="password"
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            minLength="5"
            maxLength="40"
            placeholder={int[lang].PopupLogin.Fields.input.placeholder.password}
            required
          />
          <span className={styles.error}>
            {errors.password || ''}
          </span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default PopupLogin;
