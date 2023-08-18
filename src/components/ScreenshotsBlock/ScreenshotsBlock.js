import React from 'react';
import styles from './ScreenshotsBlock.module.css';
import Modal from '../Modal/Modal';

function ScreenshotsBlock(props) {

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
        <>
          <div className={styles.screenshotMain}></div>
          <figcaption className={styles.screenshotFig}>{props.text.screenshotsBlockScreenshotFigLeft}</figcaption>
        </>
      );
    else
      return (
        <>
          <div className={styles.screenshotCont}></div>
          <figcaption className={styles.screenshotFig}>{props.text.screenshotsBlockScreenshotFigRight}</figcaption>
        </>
      );
  };

  return (
    <>
    <div className={styles.screenshotsBlock}>
      <div className={styles.container}>
        <h2 className={styles.header}>{props.text.screenshotsBlockHeader}</h2>
        <div className={styles.screenshotsBox}>
          <figure className={styles.screenshotBox} onClick={()=>{openModal(); SetModalContent('screenshotMain')}}>
            <div className={styles.screenshotMain}></div>
            <figcaption className={styles.screenshotFig}>{props.text.screenshotsBlockScreenshotFigLeft}</figcaption>
          </figure>
          <figure className={styles.screenshotBox} onClick={()=>{openModal(); SetModalContent('screenshotCont')}}>
            <div className={styles.screenshotCont}></div>
            <figcaption className={styles.screenshotFig}>{props.text.screenshotsBlockScreenshotFigRight}</figcaption>
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
