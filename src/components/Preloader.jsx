import React from 'react';
import styles from './Preloader.module.css';

function Preloader() {
  return (
    <section className={styles.preloader}>
      <i className={styles.circlePreloader} />
      <p className={styles.preloaderText}>Searching movies in progress...</p>
    </section>
  );
}

export default Preloader;
