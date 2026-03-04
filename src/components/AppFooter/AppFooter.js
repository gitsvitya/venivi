import React from "react";
import styles from "./AppFooter.module.css";

function AppFooter() {
  // Футер завершает страницу, показывает период проекта и внешнюю ссылку на сайт автора.
  return (
    <footer className={styles.appFooter}>
      <div className={styles.container}>
        <div className={styles.navigation}>
          <p className={styles.paragraph}>2013 - 2014 | venivi.ru</p>
          <a
            href="https://svitya.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            svitya.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
