import React from "react";
import styles from "./CookieBanner.module.css";

function CookieBanner({ text, closeLabel, onClose }) {
  // Баннер уведомляет об использовании cookie и предоставляет кнопку закрытия.
  return (
    <div className={styles.banner} role="status" aria-live="polite">
      <p className={styles.text}>{text}</p>
      <button type="button" className={styles.button} onClick={onClose}>
        {closeLabel}
      </button>
    </div>
  );
}

export default CookieBanner;
