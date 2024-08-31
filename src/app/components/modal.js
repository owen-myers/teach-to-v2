
import { createPortal } from "react-dom";

const modalBackgroundStyling = "fixed inset-0 backdrop-blur bg-gray-300 bg-opacity-50 flex justify-center items-center p-12";
const modalCardStyling = "bg-white p-8 rounded-lg shadow-lg relative";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={modalBackgroundStyling} onClick={onClose}>
      <div className={modalCardStyling} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
