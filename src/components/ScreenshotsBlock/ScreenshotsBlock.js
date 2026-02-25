import React from "react";
import styles from "./ScreenshotsBlock.module.css";
import Modal from "../Modal/Modal";
import { MODAL_TRANSITION_MS } from "../../constants/ui";

function ScreenshotsBlock(props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isModalClosing, setIsModalClosing] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");
  const closeTimeoutRef = React.useRef(null);

  React.useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  function openModal() {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsModalClosing(false);
    setIsModalOpen(true);
  }

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

  function renderModalContent(input) {
    if (input === "screenshotMain")
      return (
        <>
          <div
            className={`${styles.screenshotMain} ${styles.screenshotModalImage}`}
          ></div>
          <p className={styles.screenshotFigModal}>
            {props.text.screenshotsBlockScreenshotFigLeft}
          </p>
        </>
      );
    else
      return (
        <>
          <div
            className={`${styles.screenshotCont} ${styles.screenshotModalImage}`}
          ></div>
          <p className={styles.screenshotFigModal}>
            {props.text.screenshotsBlockScreenshotFigRight}
          </p>
        </>
      );
  }

  return (
    <>
      <div className={styles.screenshotsBlock}>
        <div className={styles.container}>
          <h2 className={styles.header}>{props.text.screenshotsBlockHeader}</h2>
          <div className={styles.screenshotsBox}>
            <button
              type="button"
              className={styles.screenshotBox}
              aria-label={props.text.screenshotsBlockScreenshotFigLeft}
              onClick={() => {
                openModal();
                setModalContent("screenshotMain");
              }}
            >
              <div className={styles.screenshotMain}></div>
              <span className={styles.screenshotFig}>
                {props.text.screenshotsBlockScreenshotFigLeft}
              </span>
            </button>
            <button
              type="button"
              className={styles.screenshotBox}
              aria-label={props.text.screenshotsBlockScreenshotFigRight}
              onClick={() => {
                openModal();
                setModalContent("screenshotCont");
              }}
            >
              <div className={styles.screenshotCont}></div>
              <span className={styles.screenshotFig}>
                {props.text.screenshotsBlockScreenshotFigRight}
              </span>
            </button>
          </div>
        </div>
      </div>
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
