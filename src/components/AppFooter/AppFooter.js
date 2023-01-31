import React from 'react';
import styles from './AppFooter.module.css';

function AppFooter() {
  return (
    <div className={styles.appFooter}>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <p className={styles.paragraph}>2013 - 2014 | venivi.ru project</p>
          <a href='https://svitya.com/' target='_blank' className={styles.link}>prod. svitya.com</a>
        </nav>
      </div>
    </div>
  );
}

export default AppFooter
