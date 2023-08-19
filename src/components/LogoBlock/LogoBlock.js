import React from "react";
import styles from "./LogoBlock.module.css";

function LogoBlock(props) {
  return (
    <div className={styles.LogoBlock}>
      <div className={styles.container}>
        <div className={styles.logo}></div>
        <div className={styles.textContainer}>
          <p className={styles.textVenivi}>Venivi.ru</p>
          <h1 className={styles.textAbout}>{props.text.logoBlockTextAbout}</h1>
          <h2 className={styles.textLogo}>{props.text.logoBlockTextLogo}</h2>
        </div>
      </div>
    </div>
  );
}

export default LogoBlock;
