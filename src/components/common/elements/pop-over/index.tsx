// Popover.jsx
import React from "react";
import ReactDOM from "react-dom";

const Popover = ({ isOpen, children }) => {
  if (!isOpen) return null;

  // The second argument is the DOM node where the children will be rendered
  return ReactDOM.createPortal(
    <div className="popover-content">{children}</div>,
    document.getElementById("popover-root") || document.body, // Fallback to body
  );
};

export default Popover;
