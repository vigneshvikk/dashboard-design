import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AppointmentFormCard() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    organization: "",
    outcome: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <h5 className="mb-4 text-center">Appointment Request</h5>

        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>

        {/* Contact */}
        <div className="mb-3">
          <label className="form-label">Contact Info</label>
          <input
            type="text"
            className="form-control"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Phone or Email"
          />
        </div>

        {/* Organization */}
        <div className="mb-3">
          <label className="form-label">Organization</label>
          <input
            type="text"
            className="form-control"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Name of organization you represent"
          />
        </div>

        {/* Expected Outcome */}
        <div className="mb-3">
          <label className="form-label">
            Expected Outcome (up to 6 points)
          </label>
          <textarea
            className="form-control"
            name="outcome"
            value={formData.outcome}
            onChange={handleChange}
            placeholder="List what you expect from the appointment..."
            rows={6}
          ></textarea>
        </div>

        {/* Book Button */}
        <button className="btn btn-success w-100">Book Appointment</button>
      </div>
    </div>
  );
}

export default AppointmentFormCard;
