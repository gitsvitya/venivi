import React from "react";
import styles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import LogoBlock from "../LogoBlock/LogoBlock";
import AboutBlock from "../AboutBlock/AboutBlock";
import ScreenshotsBlock from "../ScreenshotsBlock/ScreenshotsBlock";
import AuthorsBlock from "../AuthorsBlock/AuthorsBlock";
import AppFooter from "../AppFooter/AppFooter";
import CookieBanner from "../CookieBanner/CookieBanner";
import { rusLng, engLng } from "../../utils/lng";
import { LANGUAGE_SWITCH_FADE_MS } from "../../constants/ui";

// Ключ для localStorage, который хранит факт закрытия cookie-баннера.
const COOKIE_BANNER_STORAGE_KEY = "venivi-cookie-banner-dismissed";

// Функция обновляет содержимое одного meta-тега, если он существует в документе.
function updateMeta(selector, content) {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
}

function App() {
  // Состояние определяет текущий язык интерфейса по языку браузера при первом рендере.
  const [language, setLanguage] = React.useState(() => {
    const browserLanguage =
      typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "ru";

    return browserLanguage.startsWith("ru") ? "ru" : "en";
  });

  // Состояние управляет анимацией плавного исчезновения контента при смене языка.
  const [isLanguageFadingOut, setIsLanguageFadingOut] = React.useState(false);
  const languageTransitionTimeoutRef = React.useRef(null);

  // Состояние определяет, нужно ли показывать cookie-баннер, с учетом сохраненного выбора пользователя.
  const [isCookieBannerVisible, setIsCookieBannerVisible] = React.useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    try {
      return window.localStorage.getItem(COOKIE_BANNER_STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  });

  // Выбранный словарь интерфейса вычисляется из текущего языка и используется во всех блоках страницы.
  const currentText = language === "ru" ? rusLng : engLng;

  // Эффект синхронизирует SEO-метаданные и атрибут lang в html с выбранным языком.
  React.useEffect(() => {
    document.title = currentText.pageTitle;
    document.documentElement.lang = language;

    updateMeta('meta[name="description"]', currentText.pageMetaDescription);
    updateMeta('meta[property="og:title"]', currentText.pageOgTitle);
    updateMeta('meta[property="og:description"]', currentText.pageOgDescription);
    updateMeta('meta[property="og:locale"]', currentText.pageOgLocale);
    updateMeta('meta[name="twitter:title"]', currentText.pageTwitterTitle);
    updateMeta(
      'meta[name="twitter:description"]',
      currentText.pageTwitterDescription
    );

    const schemaScript = document.getElementById("seo-schema");

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

  // Эффект очищает таймер анимации языка при размонтировании компонента.
  React.useEffect(() => {
    return () => {
      if (languageTransitionTimeoutRef.current) {
        clearTimeout(languageTransitionTimeoutRef.current);
      }
    };
  }, []);

  // Обработчик запускает анимацию смены языка и меняет язык после завершения fade-out.
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

  // Обработчик скрывает cookie-баннер и сохраняет решение пользователя в localStorage.
  function closeCookieBanner() {
    setIsCookieBannerVisible(false);

    try {
      window.localStorage.setItem(COOKIE_BANNER_STORAGE_KEY, "1");
    } catch {}
  }

  // Разметка собирает страницу из секций, прокидывает локализованный текст и состояние UI-компонентов.
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
          changeLanguage={handleLanguageChange}
          language={language}
        />
        <main className={styles.main}>
          <LogoBlock text={currentText} />
          <AboutBlock text={currentText} />
          <ScreenshotsBlock text={currentText} />
          <AuthorsBlock text={currentText} />
        </main>
        <AppFooter />
        {isCookieBannerVisible && (
          <CookieBanner
            text={currentText.cookieBannerText}
            closeLabel={currentText.cookieBannerCloseButton}
            onClose={closeCookieBanner}
          />
        )}
      </div>
    </div>
  );
}

export default App;
