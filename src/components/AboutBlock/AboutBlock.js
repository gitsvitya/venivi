import React from "react";
import styles from "./AboutBlock.module.css";

function AboutBlock({ text }) {
  // Секция описывает идею проекта, ключевые результаты и причины закрытия.
  return (
    <section className={styles.aboutBlock} aria-labelledby="about-title">
      <div className={styles.container}>
        <h2 id="about-title" className={styles.header}>
          {text.aboutBlockHeader}
        </h2>
        <div className={styles.textBoxes}>
          <article className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>{text.aboutBlockTextBoxHeaderLeft}</h3>
            <p className={styles.textBoxParagraph}>
              {text.aboutBlockTextBoxParagraphLeft}
            </p>
          </article>
          <article className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {text.aboutBlockTextBoxHeaderCenter}
            </h3>
            <ul className={styles.textBoxListItems}>
              <li className={styles.textBoxListItem}>{text.aboutBlockLestItemOne}</li>
              <li className={styles.textBoxListItem}>{text.aboutBlockLestItemTwo}</li>
              <li className={styles.textBoxListItem}>{text.aboutBlockLestItemThree}</li>
            </ul>
          </article>
          <article className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>{text.aboutBlockTextBoxHeaderRight}</h3>
            <p className={styles.textBoxParagraph}>
              {text.aboutBlockTextBoxParagraphRight}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutBlock;
