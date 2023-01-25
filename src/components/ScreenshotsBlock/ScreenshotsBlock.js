import React from 'react';
import styles from './ScreenshotsBlock.module.css';

function ScreenshotsBlock() {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>How it looked like?</h2>
      <div className={styles.screenshotsBox}>
        <figure className={styles.screenshotBox}>
          <div className={styles.screenshotMain}></div>
          <figcaption className={styles.screenshotFig}>Main page</figcaption>
        </figure>
        <figure className={styles.screenshotBox}>
          <div className={styles.screenshotCont}></div>
          <figcaption className={styles.screenshotFig}>Contest screen</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ScreenshotsBlock
