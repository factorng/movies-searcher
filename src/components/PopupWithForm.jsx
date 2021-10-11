/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
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
  return (
    <div
      className={
        isOpen ? `${styles.popup} ${styles.popupOpen}` : `${styles.popup}`
      }
    >
      <form className={styles.popupForm} onSubmit={onSubmit} noValidate>
        <button
          className={styles.popupButtonClose}
          type="button"
          aria-label="close"
          onClick={onClose}
        >
          X
        </button>
        <h3 className="popupTitle">{title}</h3>
        {children}

        <button
          className={
            submitEnable
              ? styles.popupButtonSubmit
              : `${styles.popupButtonSubmit} ${styles.popupButtonSubmitDisabled}`
          }
          disabled={!submitEnable}
          type="submit"
        >
          {buttonText}
        </button>
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
