import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import styles from "./Modal.module.css";

const Modal = ({ children, closeModal }) => {
  const container = document.querySelector("#modal");
  const closeButtonRef = React.useRef(null);

  React.useEffect(() => {
    const prevFocusedElement = document.activeElement;

    function closeModalByEsc(evt) {
      evt.key === "Escape" && closeModal();
    }

    document.addEventListener("keydown", closeModalByEsc);
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", closeModalByEsc);
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
      <div className={styles.modalWindow} role="dialog" aria-modal="true">
        <button
          ref={closeButtonRef}
          type="button"
          className={styles.closeIcon}
          onClick={closeModal}
          aria-label="Закрыть модальное окно"
        />
        {children}
      </div>
      <ModalOverlay onClick={closeModal} />
    </>,
    container
  );
};

export default Modal;
