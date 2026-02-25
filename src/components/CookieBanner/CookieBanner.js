import React from "react";
import styles from "./CookieBanner.module.css";

function CookieBanner({ text, closeLabel, onClose }) {
  return (
    <div className={styles.banner} role="dialog" aria-modal="false" aria-label="Cookie notice">
      <p className={styles.text}>{text}</p>
      <button type="button" className={styles.button} onClick={onClose}>
        {closeLabel}
      </button>
    </div>
  );
}

export default CookieBanner;
