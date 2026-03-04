import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.css";

// Селектор описывает интерактивные элементы, между которыми удерживается фокус внутри модалки.
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

const Modal = ({
  children,
  closeModal,
  isClosing = false,
  transitionMs = 220,
}) => {
  // Контейнер указывает DOM-узел, в который портал рендерит модальное окно поверх приложения.
  const container = document.getElementById("modal");
  const modalWindowRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);
  const closeModalRef = React.useRef(closeModal);

  // Эффект обновляет ссылку на актуальный closeModal, чтобы обработчик клавиатуры не держал устаревшее замыкание.
  React.useEffect(() => {
    closeModalRef.current = closeModal;
  }, [closeModal]);

  // Эффект блокирует скролл, управляет фокусом и закрытием по Escape/Tab во время жизни модального окна.
  React.useEffect(() => {
    const prevFocusedElement = document.activeElement;
    const prevBodyOverflow = document.body.style.overflow;

    function handleKeyDown(evt) {
      if (evt.key === "Escape") {
        closeModalRef.current();
        return;
      }

      if (evt.key !== "Tab") {
        return;
      }

      const modalElement = modalWindowRef.current;

      if (!modalElement) {
        return;
      }

      const focusableElements = Array.from(
        modalElement.querySelectorAll(FOCUSABLE_SELECTOR)
      ).filter((element) => {
        if (!(element instanceof HTMLElement)) {
          return false;
        }

        return !element.hasAttribute("disabled");
      });

      if (focusableElements.length === 0) {
        evt.preventDefault();
        modalElement.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (evt.shiftKey && document.activeElement === firstElement) {
        evt.preventDefault();
        lastElement.focus();
      } else if (!evt.shiftKey && document.activeElement === lastElement) {
        evt.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevBodyOverflow;

      if (prevFocusedElement instanceof HTMLElement) {
        prevFocusedElement.focus();
      }
    };
  }, []);

  // Условие защищает приложение, если контейнер модалки отсутствует в index.html.
  if (!container) {
    return null;
  }

  // Портал выводит окно и оверлей поверх корневого React-дерева.
  return ReactDOM.createPortal(
    <>
      <div
        ref={modalWindowRef}
        className={`${styles.modalWindow} ${
          isClosing ? styles.modalWindowClosing : ""
        }`}
        style={{ "--modal-transition-ms": `${transitionMs}ms` }}
        role="dialog"
        aria-modal="true"
        aria-label="Просмотр скриншота"
        tabIndex={-1}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeIcon}
          onClick={closeModal}
          aria-label="Закрыть модальное окно"
        />
        {children}
      </div>
      <ModalOverlay
        onClick={closeModal}
        isClosing={isClosing}
        transitionMs={transitionMs}
      />
    </>,
    container
  );
};

export default Modal;
