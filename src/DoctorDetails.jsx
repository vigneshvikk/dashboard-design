import React, { useState } from "react";
import { FaStar, FaUsers, FaBriefcase } from "react-icons/fa";
import dr from "./dr.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function DoctorDetails() {
  const [activeTab, setActiveTab] = useState("bio");

  const doctor = {
    name: "Dr. Aisha Khan",
    qualification: "MBBS, MD (Cardiology)",
    experience: 12,
    clients: 1500,
    rating: 4.7,
    biography:
      "Dr. Aisha Khan is an experienced cardiologist with over 12 years of expertise in treating complex heart conditions. She has worked at top hospitals and believes in patient-centric care.",
    availability: "Mon - Fri: 10:00 AM - 5:00 PM",
    reviews: [
      { name: "John Doe", comment: "Very professional and kind.", rating: 5 },
      {
        name: "Ravi Kumar",
        comment: "Solved my issue efficiently!",
        rating: 4,
      },
    ],
  };

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    return (
      <>
        {[...Array(full)].map((_, i) => (
          <FaStar key={`f-${i}`} className="text-warning" />
        ))}
        {half && <FaStar className="text-warning" style={{ opacity: 0.5 }} />}
        {[...Array(empty)].map((_, i) => (
          <FaStar key={`e-${i}`} className="text-secondary" />
        ))}
      </>
    );
  };

  return (
    <div className="container py-4">
      <div className="text-center mb-4">
        <img
          src={dr}
          alt={doctor.name}
          className="rounded-circle shadow"
          style={{ width: "180px", height: "180px", objectFit: "cover" }}
        />
        <h4 className="mt-3">{doctor.name}</h4>
        <p className="text-muted">{doctor.qualification}</p>
        <button className="btn btn-primary px-4">Book Appointment</button>
      </div>

      <div className="row text-center mb-4">
        <div className="col-md-4 mb-3">
          <FaUsers className="text-primary mb-1" />
          <h6>{doctor.clients}+ Clients</h6>
        </div>
        <div className="col-md-4 mb-3">
          <FaBriefcase className="text-success mb-1" />
          <h6>{doctor.experience} Years Experience</h6>
        </div>
        <div className="col-md-4 mb-3">
          <h6>
            {renderStars(doctor.rating)}{" "}
            <small className="ms-2 text-muted">({doctor.rating})</small>
          </h6>
        </div>
      </div>

      <ul className="nav nav-tabs justify-content-center mb-3">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "bio" ? "active" : ""}`}
            onClick={() => setActiveTab("bio")}
          >
            Biography
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "availability" ? "active" : ""
            }`}
            onClick={() => setActiveTab("availability")}
          >
            Availability
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "reviews" ? "active" : ""}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </li>
      </ul>

      <div className="border rounded p-3">
        {activeTab === "bio" && <p>{doctor.biography}</p>}
        {activeTab === "availability" && (
          <p>
            <strong>Working Hours:</strong> {doctor.availability}
          </p>
        )}
        {activeTab === "reviews" && (
          <ul className="list-unstyled">
            {doctor.reviews.map((r, idx) => (
              <li key={idx} className="mb-3 border-bottom pb-2">
                <strong>{r.name}</strong>
                <div className="small">{renderStars(r.rating)}</div>
                <p className="mb-0 text-muted">{r.comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default DoctorDetails;
