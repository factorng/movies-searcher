import React from 'react';
import PropTypes from 'prop-types';
import styles from './Main.module.css';

export default function Main({ children }) {
  return (
    <div className={styles.main}>{children}</div>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};
