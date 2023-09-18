/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { closeAllPopups } from '../store/actions/actions';
import Button from './Button';
// eslint-disable-next-line no-unused-vars
import styles from './PopupWithForm.module.css';

function PopupWithForm({
  isOpen,
  onSubmit,
  submitEnable,
  onClose,
  title,
  children,
  buttonText,
}) {
  const dispatch = useDispatch();
  useEffect(() => {
    const close = (e) => {
      if (e.target.className.includes('overlay')) {
        dispatch(closeAllPopups());
      }
    };
    if (isOpen) {
      document.body.addEventListener('click', close);
    }
    return () => {
      document.body.removeEventListener('click', close);
    };
  }, [isOpen]);
  return (
    <div
      className={
        isOpen ? `${styles.overlay} ${styles.open}` : `${styles.overlay}`
      }
    >
      <form
        className={styles.form}
        onSubmit={onSubmit}
        noValidate
      >
        <button
          className={styles['close-button']}
          type="button"
          aria-label="close"
          onClick={onClose}
        >
          X
        </button>
        <h3 className={styles.title}>{title}</h3>
        {children}
        <Button
          type="submit"
          title={buttonText}
          disabled={!submitEnable}
        />
      </form>
    </div>
  );
}

export default PopupWithForm;

PopupWithForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitEnable: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  buttonText: PropTypes.string.isRequired,
};
