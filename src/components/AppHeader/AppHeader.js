import React from 'react';
import styles from './AppHeader.module.css';

const langName = 'Ru';

function AppHeader() {
  return (
    <header className={styles.header}>
      <button className={styles.langButton}>{langName}</button>
    </header>
  );
}

export default AppHeader;
