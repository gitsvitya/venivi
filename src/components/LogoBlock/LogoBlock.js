import React from 'react';
import styles from './LogoBlock.module.css';

function LogoBlock() {
  return (
    <div className={styles.LogoBlock}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.textContainer}>
          <p className={styles.textVenivi}>Venivi.ru</p>
          <h1 className={styles.textAbout}>Task platform for giveaways &laquo;Veni, vidi, vici&raquo;</h1>
          <h2 className={styles.textLogo}>I came, I saw, I conquered!</h2>
        </div>
      </div>
    </div>
  );
}

export default LogoBlock;
