import React from 'react';
import styles from './LogoBlock.module.css';

function LogoBlock() {
  return(
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <div className={styles.textContainer}>
        <p>Venivi</p>
        <h1>Task platform for giveaways ‘Veni, vidi, vici’</h1>
        <h2>I came, I saw, I conquered!</h2>
      </div>
    </div>
  );
}
