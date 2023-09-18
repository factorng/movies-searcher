import React from 'react';
import { useSelector } from 'react-redux';
import { int } from '../int/ru-eng';
import styles from './Footer.module.css';

export default function Footer() {
  const lang = useSelector((state) => state.lang);
  return (
    <footer className={styles.footer}>
      <div className={styles.bottom}>
        <p>{int[lang].Footer.caption}</p>
      </div>
    </footer>
  );
}
