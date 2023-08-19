import React from "react";
import styles from "./AuthorsBlock.module.css";

function AuthorsBlock(props) {
  return (
    <div className={styles.authorsBlock}>
      <div className={styles.container}>
        <h2 className={styles.header}>{props.text.authorsBlockHeader}</h2>
        <div className={styles.textBoxes}>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {props.text.authorBlockTextBoxHeaderLeft}
            </h3>
            <p className={styles.textBoxParagraph}>
              {props.text.authorBlockTextBoxParagraphLeft}
            </p>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {props.text.authorBlockTextBoxHeaderCenter}
            </h3>
            <p className={styles.textBoxParagraph}>
              {props.text.authorBlockTextBoxParagraphCenter}
            </p>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {props.text.authorBlockTextBoxHeaderRight}
            </h3>
            <p className={styles.textBoxParagraph}>
              {props.text.authorBlockTextBoxParagraphRight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthorsBlock;
