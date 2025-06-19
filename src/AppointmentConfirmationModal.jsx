import React, { useState } from "react";
import { FaThumbsUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function AppointmentConfirmationModal({ show, onClose }) {
  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center p-4">
          <FaThumbsUp className="text-success mb-3" size={50} />
          <h4 className="mb-2">Thank You!</h4>
          <p className="mb-2">
            Your appointment has been confirmed successfully.
          </p>
          <p className="text-muted">
            You will receive a confirmation email or SMS with further details.
          </p>
          <button className="btn btn-primary mt-3" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentConfirmationModal;
