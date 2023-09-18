/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { int } from '../int/ru-eng';
import PopupWithForm from './PopupWithForm';
import useFormWithValidation from '../hooks/useFormWithValidation';
import { toggleAuthPopup, createUser } from '../store/actions/actions';
import styles from './PopupWithForm.module.css';

function PopupRegister() {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.popupsIsOpen.auth);
  const lang = useSelector((state) => state.lang);

  function handleClose() {
    dispatch(toggleAuthPopup());
    resetForm({ email: '', password: '' });
  }
  function handleSubmit(e) {
    e.preventDefault();
    const { email, password, name } = values;
    if (!email || !password || !name) {
      return;
    }
    if (localStorage.getItem(email)) {
      alert(int[lang].PopupRegister.userExist);
    } else {
      dispatch(createUser({ email, password, name }));
      handleClose();
    }
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title={int[lang].PopupRegister.PopupWithForm.title}
      onSubmit={handleSubmit}
      buttonText={int[lang].PopupRegister.PopupWithForm.buttonText}
      submitEnable={isValid}
    >
      <>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="email">{int[lang].PopupRegister.Fields.labels.email}</label>
          <input
            id="email"
            className={styles.input}
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            minLength="5"
            maxLength="40"
            placeholder={int[lang].PopupRegister.Fields.input.placeholder.email}
            pattern="^[^@]+@[^@.]+\.[^@]+$"
            required
          />
          <span className={styles.error}>{errors.email || ''}</span>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="password">{int[lang].PopupRegister.Fields.labels.password}</label>
          <input
            id="password"
            className={styles.input}
            type="password"
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            minLength="5"
            maxLength="40"
            placeholder={int[lang].PopupRegister.Fields.input.placeholder.password}
            required
          />
          <span className={styles.error}>
            {errors.password || ''}
          </span>
        </div>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="name">{int[lang].PopupRegister.Fields.labels.name}</label>
          <input
            id="name"
            className={styles.input}
            type="text"
            value={values.name || ''}
            onChange={handleChange}
            name="name"
            minLength="2"
            maxLength="40"
            placeholder={int[lang].PopupRegister.Fields.input.placeholder.name}
            required
          />
          <span className={styles.error}>{errors.name || ''}</span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default PopupRegister;
