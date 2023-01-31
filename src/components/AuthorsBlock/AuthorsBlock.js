import React from 'react';
import styles from './AuthorsBlock.module.css';

function AuthorsBlock() {
  return (
    <div className={styles.authorsBlock}>
      <div className={styles.container}>
        <h2 className={styles.header}>What it was all about?</h2>
        <div className={styles.textBoxes}>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>Idea</h3>
            <p className={styles.textBoxParagraph}>The project was produced by Strokov Victor and Alimkhanov
              Tamerlan.</p>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>Tech</h3>
            <p className={styles.textBoxParagraph}>Technical part as well as UX/UI design were produced by Hammerheart
              studios.</p>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>30+ b2b clients</h3>
            <p className={styles.textBoxParagraph}>Venivi had more than 30 b2b clients and organized 3 e-sports
              tournaments with 300+ players </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorsBlock
