import React from "react";
import styles from "./ScreenshotsBlock.module.css";
import Modal from "../Modal/Modal";

function ScreenshotsBlock(props) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState("");

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
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
        <Modal closeModal={closeModal}>
          {renderModalContent(modalContent)}
        </Modal>
      )}
    </>
  );
}

export default ScreenshotsBlock;
