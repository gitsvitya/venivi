import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.css";

const Modal = ({ children, closeModal, isClosing = false }) => {
  const container = document.querySelector("#modal");
  const closeButtonRef = React.useRef(null);

  React.useEffect(() => {
    const prevFocusedElement = document.activeElement;
    const prevBodyOverflow = document.body.style.overflow;

    function closeModalByEsc(evt) {
      evt.key === "Escape" && closeModal();
    }

    document.addEventListener("keydown", closeModalByEsc);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", closeModalByEsc);
      document.body.style.overflow = prevBodyOverflow;
      if (prevFocusedElement instanceof HTMLElement) {
        prevFocusedElement.focus();
      }
    };
  }, [closeModal]);

  if (!container) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div
        className={`${styles.modalWindow} ${
          isClosing ? styles.modalWindowClosing : ""
        }`}
        role="dialog"
        aria-modal="true"
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
      <ModalOverlay onClick={closeModal} isClosing={isClosing} />
    </>,
    container
  );
};

export default Modal;
