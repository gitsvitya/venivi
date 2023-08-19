import React from "react";
import styles from "./AboutBlock.module.css";

function AboutBlock(props) {
  return (
    <div className={styles.aboutBlock}>
      <div className={styles.container}>
        <h2 className={styles.header}>{props.text.aboutBlockHeader}</h2>
        <div className={styles.textBoxes}>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {props.text.aboutBlockTextBoxHeaderLeft}
            </h3>
            <p className={styles.textBoxParagraph}>
              {props.text.aboutBlockTextBoxParagraphLeft}
            </p>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {props.text.aboutBlockTextBoxHeaderCenter}
            </h3>
            <ul className={styles.textBoxListItems}>
              <li className={styles.textBoxListItem}>
                {props.text.aboutBlockLestItemOne}
              </li>
              <li className={styles.textBoxListItem}>
                {props.text.aboutBlockLestItemTwo}
              </li>
              <li className={styles.textBoxListItem}>
                {props.text.aboutBlockLestItemThree}
              </li>
              <li className={styles.textBoxListItem}>
                {props.text.aboutBlockLestItemFour}
              </li>
            </ul>
          </div>
          <div className={styles.textBox}>
            <h3 className={styles.textBoxHeader}>
              {props.text.aboutBlockTextBoxHeaderRight}
            </h3>
            <p className={styles.textBoxParagraph}>
              {props.text.aboutBlockTextBoxParagraphRight}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutBlock;
