import styles from "./ModalOverlay.module.css";

const ModalOverlay = ({ onClick, isClosing = false, transitionMs = 220 }) => {
  return (
    <div
      className={`${styles.modalOverlay} ${
        isClosing ? styles.modalOverlayClosing : ""
      }`}
      style={{ "--modal-transition-ms": `${transitionMs}ms` }}
      aria-hidden="true"
      onClick={onClick}
    ></div>
  );
};

export default ModalOverlay;
