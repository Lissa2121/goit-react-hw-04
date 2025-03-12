import Modal from "react-modal";
import css from './ImageModal.module.css';

Modal.setAppElement("#root");

const ImageModal = ({ isOpen, onRequestClose, image }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    {image && (
      <div className={css.imageModalWrapper}>
        <img className={css.imageModalImg} src={image.urls.regular} alt={image.alt_description} />
        <p className={css.imageModalText}>Author: {image.user.name}</p>
        <p className={css.imageModalText}>Likes: {image.likes}</p>
      </div>
    )}
  </Modal>
);

export default ImageModal;