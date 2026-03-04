import React from "react";
import styles from "./LogoBlock.module.css";

function LogoBlock({ text }) {
  // Секция показывает главный визуальный блок: логотип и ключевое позиционирование проекта.
  return (
    <section className={styles.logoBlock} aria-labelledby="hero-title">
      <div className={styles.container}>
        <div className={styles.logo} aria-hidden="true"></div>
        <div className={styles.textContainer}>
          <p className={styles.textVenivi}>Venivi.ru</p>
          <h1 id="hero-title" className={styles.textAbout}>
            {text.logoBlockTextAbout}
          </h1>
          <h2 className={styles.textLogo}>{text.logoBlockTextLogo}</h2>
        </div>
      </div>
    </section>
  );
}

export default LogoBlock;
