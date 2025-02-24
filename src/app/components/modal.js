
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const modalBackgroundStyling = "fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center p-4 sm:p-8 md:p-12 transition-opacity duration-300";
const modalCardStyling = "flex justify-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform w-auto md:w-3/4 max-w-full max-h-full overflow-auto";

const Modal = ({ isOpen, onClose, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateOpen, setAnimateOpen] = useState(false);

  useEffect(() => {
    console.log('isOpen', isOpen);
    if (isOpen) {
      setIsVisible(true);
      setTimeout(() => setAnimateOpen(true), 10);
    } else {
      // Trigger fade-out effect by delaying the modal closure
      setAnimateOpen(false);
      const timer = setTimeout(() => setIsVisible(false), 300); // match the duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return createPortal(
    <div
      className={`${modalBackgroundStyling} ${animateOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose}
    >
      <div
        className={`${modalCardStyling} ${animateOpen ? 'scale-100' : 'scale-90'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 mr-2 text-gray-500 hover:text-gray-800 font-karla text-xl"
          aria-label="Close"
          >
            x
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;

