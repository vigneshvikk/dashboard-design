import React from "react";
import { FaHeart, FaStar } from "react-icons/fa";
import dr from "./dr.jpg";

const doctors = [
  {
    name: "Dr. Aisha Khan",
    qualification: "MBBS, MD (Cardiology)",
    location: "Chennai, India",
    image: dr,
    rating: 4.5,
  },
  {
    name: "Dr. Rahul Mehta",
    qualification: "MBBS, MS (Orthopedics)",
    location: "Mumbai, India",
    image: dr,
    rating: 4.2,
  },
  {
    name: "Dr. Neha Patel",
    qualification: "BDS, MDS (Pediatric Dentistry)",
    location: "Ahmedabad, India",
    image: dr,
    rating: 4.7,
  },
  {
    name: "Dr. Kiran Rao",
    qualification: "MBBS, MD (Neurology)",
    location: "Delhi, India",
    image: dr,
    rating: 4.8,
  },
  {
    name: "Dr. Meera Iyer",
    qualification: "MBBS, MS (ENT)",
    location: "Bangalore, India",
    image: dr,
    rating: 4.3,
  },
];

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <div className="d-flex align-items-center mb-2">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={i} className="text-warning" size={14} />
      ))}
      {halfStar && (
        <FaStar className="text-warning" size={14} style={{ opacity: 0.5 }} />
      )}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <FaStar key={i} className="text-secondary" size={14} />
      ))}
      <small className="ms-1 text-muted">({rating})</small>
    </div>
  );
}

function AgentList() {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="col-12 col-md-4 col-lg-3">
            <div
              className="card h-100 shadow-sm position-relative"
              style={{ minHeight: "380px" }}
            >
              <FaHeart
                className="position-absolute top-0 end-0 m-2 text-danger cursor-pointer"
                title="Add to Wishlist"
              />
              <img
                src={doctor.image}
                className="card-img-top"
                alt={doctor.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h6 className="card-title mb-1">{doctor.name}</h6>
                <p
                  className="card-text mb-1 text-muted"
                  style={{ fontSize: "0.9rem" }}
                >
                  {doctor.qualification}
                </p>
                <p
                  className="card-text text-muted"
                  style={{ fontSize: "0.85rem" }}
                >
                  {doctor.location}
                </p>
                <StarRating rating={doctor.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AgentList;
