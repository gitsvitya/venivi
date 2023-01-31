import React from 'react';
import styles from './AppHeader.module.css';

const langName = 'Ru';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className = {styles.resCon}>
        <button className={styles.langButton}>{langName}</button>
      </div>
    </header>
  );
}

export default AppHeader;
