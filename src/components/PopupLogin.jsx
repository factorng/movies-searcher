/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import PopupWithForm from './PopupWithForm';
import useFormWithValidation from '../hooks/useFormWithValidation';
import {
  createUser,
  setFavourites,
  deleteHistory,
} from '../store/actions/actions';
import styles from './PopupWithForm.module.css';

// eslint-disable-next-line react/prop-types
function PopupLogin({ isOpen }) {
  const {
    values, handleChange, errors, isValid, resetForm,
  } = useFormWithValidation();
  const dispatch = useDispatch();
  const history = useHistory();

  function handleClose() {
    history.push('/');
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
        dispatch(deleteHistory());
        handleClose();
      } else {
        history.push('/sign-in/info?data=Wrong password');
      }
    } else {
      history.push('/sign-in/info?data=User not found');
    }
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={handleClose}
      title="Log In"
      onSubmit={handleSubmit}
      buttonText="Log in"
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
      </>
    </PopupWithForm>
  );
}

export default PopupLogin;

PopupLogin.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
