import React from "react";
import styles from "./AppHeader.module.css";

function AppHeader({ text, language, changeLanguage }) {
  // Переменная хранит язык, на который переключится интерфейс после нажатия кнопки.
  const nextLanguage = language === "ru" ? "en" : "ru";

  // Компонент рендерит верхнюю панель страницы и кнопку переключения языка.
  return (
    <header className={styles.header}>
      <div className={styles.resCon}>
        <button
          type="button"
          className={styles.langButton}
          onClick={() => {
            changeLanguage(nextLanguage);
          }}
        >
          {text.appHeaderLangButton}
        </button>
      </div>
    </header>
  );
}

export default AppHeader;
