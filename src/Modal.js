import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const Modal = ({ title, subtitle, styles, isOpen, setIsOpen }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isOpen !== undefined) {
      setIsVisible(isOpen);
    }
  }, [isOpen]);

  const onClose = () => {
    const setValue = setIsOpen ?? setIsVisible;
    setValue(false);
  };

  if (!isVisible) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="overlay" onClick={onClose} />
      <div className="modal" style={styles}>
        <div className="close-button" onClick={onClose}>
          &#10060;
        </div>
        <div> {title} </div>
        <div> {subtitle} </div>
      </div>
    </div>,
    rootElement
  );
};

Modal.defaultProps = {
  title: "",
  subtitle: "",
  styles: {
    width: "300px"
  }
};

const rootElement = document.getElementById("root");
export default Modal;
