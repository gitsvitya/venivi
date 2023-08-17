import React from 'react';
import styles from './ScreenshotsBlock.module.css';
import Modal from '../Modal/Modal';

function ScreenshotsBlock() {

  const [ModalOpen, ModalOpened] = React.useState(false);
  const [ModalContent, SetModalContent] = React.useState('');

  function openModal() {
    ModalOpened(true);
  };

  function closeModal() {
    ModalOpened(false);
  };

  function renderModalContent(input) {

    if (input==='screenshotMain')
      return (
        <div className={styles.screenshotMain}></div>
      );
    else
      return (
        <div className={styles.screenshotCont}></div>
      );
  };

  return (
    <>
    <div className={styles.screenshotsBlock}>
      <div className={styles.container}>
        <h2 className={styles.header}>How it looked like?</h2>
        <div className={styles.screenshotsBox}>
          <figure className={styles.screenshotBox} onClick={()=>{openModal(); SetModalContent('screenshotMain')}}>
            <div className={styles.screenshotMain}></div>
            <figcaption className={styles.screenshotFig}>Main page</figcaption>
          </figure>
          <figure className={styles.screenshotBox} onClick={()=>{openModal(); SetModalContent('screenshotCont')}}>
            <div className={styles.screenshotCont}></div>
            <figcaption className={styles.screenshotFig}>Contest screen</figcaption>
          </figure>
        </div>
      </div>
    </div>
    {
      ModalOpen &&
      <Modal closeModal={closeModal}>
        `${renderModalContent(ModalContent)}`
      </Modal>
    }
    </>
  );
}

export default ScreenshotsBlock
