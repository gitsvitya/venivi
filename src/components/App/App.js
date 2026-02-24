import React from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import LogoBlock from "../LogoBlock/LogoBlock";
import AboutBlock from "../AboutBlock/AboutBlock";
import ScreenshotsBlock from "../ScreenshotsBlock/ScreenshotsBlock";
import AuthorsBlock from "../AuthorsBlock/AuthorsBlock";
import AppFooter from "../AppFooter/AppFooter";
import { rusLng, engLng } from "../../utils/lng";

const LANGUAGE_SWITCH_FADE_MS = 320;

function App() {
  const [language, setLanguage] = React.useState("ru");
  const [isLanguageFadingOut, setIsLanguageFadingOut] = React.useState(false);
  const languageTransitionTimeoutRef = React.useRef(null);

  let currentText = engLng;

  if (language === "en") currentText = engLng;
  else currentText = rusLng;

  React.useEffect(() => {
    document.title = currentText.pageTitle;
  }, [currentText]);

  React.useEffect(() => {
    return () => {
      if (languageTransitionTimeoutRef.current) {
        clearTimeout(languageTransitionTimeoutRef.current);
      }
    };
  }, []);

  function handleLanguageChange(nextLanguage) {
    if (nextLanguage === language || isLanguageFadingOut) {
      return;
    }

    setIsLanguageFadingOut(true);

    if (languageTransitionTimeoutRef.current) {
      clearTimeout(languageTransitionTimeoutRef.current);
    }

    languageTransitionTimeoutRef.current = setTimeout(() => {
      setLanguage(nextLanguage);
      setIsLanguageFadingOut(false);
      languageTransitionTimeoutRef.current = null;
    }, LANGUAGE_SWITCH_FADE_MS);
  }

  return (
    <div className={styles.page}>
      <div
        key={language}
        className={`${styles.localizedContent} ${
          isLanguageFadingOut ? styles.localizedContentFadingOut : ""
        }`}
      >
        <AppHeader
          text={currentText}
          ChangeLanguage={handleLanguageChange}
          Language={language}
        />
        <main className={styles.main}>
          <LogoBlock text={currentText} />
          <AboutBlock text={currentText} />
          <ScreenshotsBlock text={currentText} />
          <AuthorsBlock text={currentText} />
        </main>
        <AppFooter />
      </div>
    </div>
  );
}

export default App;
