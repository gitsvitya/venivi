import React from 'react';
import styles from './ScreenshotsBlock.module.css';
import Modal from '../Modal/Modal';

function ScreenshotsBlock() {

  const [ModalOpen, ModalOpened] = React.useState(false);

  function openModal() {
    ModalOpened(true);
  };

  function closeModal() {
    ModalOpened(false);
  };

  return (
    <>
    <div className={styles.screenshotsBlock}>
      <div className={styles.container}>
        <h2 className={styles.header}>How it looked like?</h2>
        <div className={styles.screenshotsBox}>
          <figure className={styles.screenshotBox} onClick={openModal}>
            <div className={styles.screenshotMain}></div>
            <figcaption className={styles.screenshotFig}>Main page</figcaption>
          </figure>
          <figure className={styles.screenshotBox} onClick={openModal}>
            <div className={styles.screenshotCont}></div>
            <figcaption className={styles.screenshotFig}>Contest screen</figcaption>
          </figure>
        </div>
      </div>
    </div>
    {
      ModalOpen &&
      <Modal closeModal={closeModal}>
        <div className={styles.data}></div> #TODO
      </Modal>
    }
    </>
  );
}

export default ScreenshotsBlock
