import React from 'react';
import styles from './AboutBlock.module.css';

function AboutBlock() {
  return (
    <div className={styles.aboutBlock}>
      <div className={styles.container}>
        <h2 className={styles.header}>What it was all about?</h2>
        <div className={styles.textBoxes}>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>When it was released?</h3>
            <p className={styles.textBoxParagraph}>Venivi was a task platform for giveaways where advertisers could
              interact with users by various prize drawings and quizzes. It was released in 2013.</p>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>What are the results?</h3>
            <ul className={styles.textBoxListItems}>
              <li className={styles.textBoxListItem}>DAU: ~1.000 users</li>
              <li className={styles.textBoxListItem}>MAU: ~7.000 users</li>
              <li className={styles.textBoxListItem}>ROI: 4%</li>
              <li className={styles.textBoxListItem}>Retention: 16%</li>
            </ul>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>Why the project was closed?</h3>
            <p className={styles.textBoxParagraph}>The project was closed in 2014 on the toughed VK.com contest rules,
              what makes the work of third-party resource work impossible.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBlock
