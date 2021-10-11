import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './PopupInfo.module.css';

export default function PopupInfo({ isOpen }) {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const history = useHistory();
  return (
    <div
      className={
        isOpen ? `${styles.popup} ${styles.popupOpen}` : `${styles.popup}`
      }
    >
      <div className={styles.popupBody}>
        <button
          className={styles.popupButtonClose}
          type="button"
          aria-label="close"
          onClick={() => history.goBack()}
        >
          X
        </button>
        {query.get('data')}
      </div>
    </div>
  );
}
PopupInfo.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
