// ErrorModal.js
import React from "react";
import './ErrorModal.css'
const ErrorModal = ({ errors, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <ul>
          {errors.map((error, i) => {
            return <li key={i}>{error}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ErrorModal;
