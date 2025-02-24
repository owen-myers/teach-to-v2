
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const modalBackgroundStyling = "fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4 sm:p-8 md:p-12 transition-opacity duration-300";
const modalCardStyling = "flex justify-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform w-auto md:w-3/4 max-w-full max-h-full overflow-auto";

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.log('isOpen', isOpen);
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Trigger fade-out effect by delaying the modal closure
      const timer = setTimeout(() => setIsVisible(false), 300); // match the duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return createPortal(
    <div
      className={`${modalBackgroundStyling} ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`${modalCardStyling} ${isOpen ? 'scale-100' : 'scale-90'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

