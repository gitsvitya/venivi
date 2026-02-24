import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ onClick, isClosing = false }) => {
  return (
    <div
      className={`${styles.modalOverlay} ${
        isClosing ? styles.modalOverlayClosing : ""
      }`}
      onClick={onClick}
    ></div>
  );
};

export default ModalOverlay;
