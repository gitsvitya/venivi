import React from "react";
import styles from "./ScreenshotsBlock.module.css";
import Modal from "../Modal/Modal";
import { MODAL_TRANSITION_MS } from "../../constants/ui";

// Константы задают поддерживаемые типы скриншотов для модального окна.
const SCREENSHOT_TYPES = {
  main: "screenshotMain",
  contest: "screenshotCont",
};

function ScreenshotsBlock({ text }) {
  // Состояния управляют жизненным циклом модального окна и выбранным скриншотом.
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalClosing, setIsModalClosing] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");
  const closeTimeoutRef = React.useRef(null);

  // Эффект очищает таймер закрытия модального окна при размонтировании компонента.
  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Обработчик открывает модальное окно и отменяет незавершенное закрытие.
  function openModal() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    setIsModalClosing(false);
    setIsModalOpen(true);
  }

  // Обработчик запускает анимацию закрытия модального окна перед размонтированием.
  function closeModal() {
    if (isModalClosing) {
      return;
    }

    setIsModalClosing(true);
    closeTimeoutRef.current = setTimeout(() => {
      setIsModalOpen(false);
      setIsModalClosing(false);
      closeTimeoutRef.current = null;
    }, MODAL_TRANSITION_MS);
  }

  // Функция возвращает содержимое модального окна в зависимости от выбранного скриншота.
  function renderModalContent(input) {
    if (input === SCREENSHOT_TYPES.main) {
      return (
        <>
          <div
            className={`${styles.screenshotMain} ${styles.screenshotModalImage}`}
          ></div>
          <p className={styles.screenshotFigModal}>
            {text.screenshotsBlockScreenshotFigLeft}
          </p>
        </>
      );
    }

    return (
      <>
        <div
          className={`${styles.screenshotCont} ${styles.screenshotModalImage}`}
        ></div>
        <p className={styles.screenshotFigModal}>
          {text.screenshotsBlockScreenshotFigRight}
        </p>
      </>
    );
  }

  // Разметка рендерит превью скриншотов и модальное окно для увеличенного просмотра.
  return (
    <>
      <section className={styles.screenshotsBlock} aria-labelledby="screenshots-title">
        <div className={styles.container}>
          <h2 id="screenshots-title" className={styles.header}>
            {text.screenshotsBlockHeader}
          </h2>
          <div className={styles.screenshotsBox}>
            <button
              type="button"
              className={styles.screenshotBox}
              aria-label={text.screenshotsBlockScreenshotFigLeft}
              onClick={() => {
                openModal();
                setModalContent(SCREENSHOT_TYPES.main);
              }}
            >
              <div className={styles.screenshotMain}></div>
              <span className={styles.screenshotFig}>
                {text.screenshotsBlockScreenshotFigLeft}
              </span>
            </button>
            <button
              type="button"
              className={styles.screenshotBox}
              aria-label={text.screenshotsBlockScreenshotFigRight}
              onClick={() => {
                openModal();
                setModalContent(SCREENSHOT_TYPES.contest);
              }}
            >
              <div className={styles.screenshotCont}></div>
              <span className={styles.screenshotFig}>
                {text.screenshotsBlockScreenshotFigRight}
              </span>
            </button>
          </div>
        </div>
      </section>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          isClosing={isModalClosing}
          transitionMs={MODAL_TRANSITION_MS}
        >
          {renderModalContent(modalContent)}
        </Modal>
      )}
    </>
  );
}

export default ScreenshotsBlock;
