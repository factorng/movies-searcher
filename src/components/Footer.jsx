import React from 'react';
import styles from './Footer.module.css';
import logo from '../images/Logo.png';

export default function Footer() {
  return (
    <footer>
      <div className={styles.logo}><img src={logo} alt="Логотип Фото дня" /></div>
      <div className={styles.footerBottom}>
        <p>Copyright © 2018 Toxin отель. Все права защищены.</p>
      </div>
    </footer>
  );
}
