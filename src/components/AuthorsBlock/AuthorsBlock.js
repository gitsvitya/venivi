import React from "react";
import styles from "./AuthorsBlock.module.css";

function AuthorsBlock({ text }) {
  // Секция показывает роли участников проекта и вклад каждой стороны.
  return (
    <section className={styles.authorsBlock} aria-labelledby="authors-title">
      <div className={styles.container}>
        <h2 id="authors-title" className={styles.header}>
          {text.authorsBlockHeader}
        </h2>
        <div className={styles.textBoxes}>
          <article className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>{text.authorBlockTextBoxHeaderLeft}</h3>
            <p className={styles.textBoxParagraph}>
              {text.authorBlockTextBoxParagraphLeft}
            </p>
          </article>
          <article className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {text.authorBlockTextBoxHeaderCenter}
            </h3>
            <p className={styles.textBoxParagraph}>
              {text.authorBlockTextBoxParagraphCenter}
            </p>
          </article>
          <article className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>{text.authorBlockTextBoxHeaderRight}</h3>
            <p className={styles.textBoxParagraph}>
              {text.authorBlockTextBoxParagraphRight}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AuthorsBlock;
