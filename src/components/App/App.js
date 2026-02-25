import React from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import LogoBlock from "../LogoBlock/LogoBlock";
import AboutBlock from "../AboutBlock/AboutBlock";
import ScreenshotsBlock from "../ScreenshotsBlock/ScreenshotsBlock";
import AuthorsBlock from "../AuthorsBlock/AuthorsBlock";
import AppFooter from "../AppFooter/AppFooter";
import { rusLng, engLng } from "../../utils/lng";
import { LANGUAGE_SWITCH_FADE_MS } from "../../constants/ui";

function App() {
  const [language, setLanguage] = React.useState(() => {
    const browserLanguage =
      typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "ru";

    return browserLanguage.startsWith("ru") ? "ru" : "en";
  });
  const [isLanguageFadingOut, setIsLanguageFadingOut] = React.useState(false);
  const languageTransitionTimeoutRef = React.useRef(null);

  let currentText = engLng;

  if (language === "en") currentText = engLng;
  else currentText = rusLng;

  React.useEffect(() => {
    document.title = currentText.pageTitle;
    document.documentElement.lang = language === "en" ? "en" : "ru";

    const metaDescription = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector(
      'meta[name="twitter:description"]'
    );
    const schemaScript = document.getElementById("seo-schema");

    if (metaDescription) {
      metaDescription.setAttribute("content", currentText.pageMetaDescription);
    }

    if (ogTitle) {
      ogTitle.setAttribute("content", currentText.pageOgTitle);
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", currentText.pageOgDescription);
    }

    if (ogLocale) {
      ogLocale.setAttribute("content", currentText.pageOgLocale);
    }

    if (twitterTitle) {
      twitterTitle.setAttribute("content", currentText.pageTwitterTitle);
    }

    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        currentText.pageTwitterDescription
      );
    }

    if (schemaScript) {
      schemaScript.textContent = JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Venivi.ru",
          url: "https://venivi.ru/",
          inLanguage: currentText.pageSchemaLanguage,
          description: currentText.pageSchemaDescription,
          mainEntity: {
            "@type": "Organization",
            name: "Venivi.ru",
            url: "https://venivi.ru/",
          },
        },
        null,
        2
      );
    }
  }, [currentText, language]);

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
    <div
      className={styles.page}
      style={{ "--language-fade-ms": `${LANGUAGE_SWITCH_FADE_MS}ms` }}
    >
      <div
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
