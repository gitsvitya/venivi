import React from "react";
import styles from "./AppHeader.module.css";

function AppHeader(props) {
  let nextLng = "";

  if (props.Language === "ru") nextLng = "en";
  else nextLng = "ru";

  return (
    <header className={styles.header}>
      <div className={styles.resCon}>
        <button
          className={styles.langButton}
          onClick={() => {
            props.ChangeLanguage(`${nextLng}`);
          }}
        >
          {props.text.appHeaderLangButton}
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
