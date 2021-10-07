/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
      alert('User already exists');
    } else {
      dispatch(createUser({ email, password, name }));
      handleClose();
    }
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="Log In"
      onSubmit={handleSubmit}
      buttonText="Register"
      submitEnable={isValid}
    >
      <>
        <div className={styles.popupInputField}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="popupInput"
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            name="email"
            minLength="5"
            maxLength="40"
            placeholder="Enter email"
            pattern="^[^@]+@[^@.]+\.[^@]+$"
            required
          />
          <span className={styles.popupInputError}>{errors.email || ''}</span>
        </div>
        <div className={styles.popupInputField}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="popupInput"
            type="password"
            value={values.password || ''}
            onChange={handleChange}
            name="password"
            minLength="5"
            maxLength="40"
            placeholder="Enter password"
            required
          />
          <span className={styles.popupInputError}>
            {errors.password || ''}
          </span>
        </div>
        <div className={styles.popupInputField}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="popupInput"
            type="text"
            value={values.name || ''}
            onChange={handleChange}
            name="name"
            minLength="2"
            maxLength="40"
            placeholder="Enter name"
            required
          />
          <span className={styles.popupInputError}>{errors.name || ''}</span>
        </div>
      </>
    </PopupWithForm>
  );
}

export default PopupRegister;
