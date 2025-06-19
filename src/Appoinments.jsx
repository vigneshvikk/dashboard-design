import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const appointments = [
  {
    id: 1,
    name: "John Doe",
    profession: "Dentist",
    status: "Confirmed",
    date: "2025-06-21",
    time: "10:00 AM",
    duration: "30 mins",
    image: "https://via.placeholder.com/60",
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Cardiologist",
    status: "Pending",
    date: "2025-06-22",
    time: "11:15 AM",
    duration: "45 mins",
    image: "https://via.placeholder.com/60",
  },
  {
    id: 3,
    name: "Mike Johnson",
    profession: "Therapist",
    status: "Cancelled",
    date: "2025-06-23",
    time: "01:30 PM",
    duration: "1 hour",
    image: "https://via.placeholder.com/60",
  },
];

const statusColor = {
  Confirmed: "success",
  Pending: "warning",
  Cancelled: "danger",
};
 
function Appoinments() {
  return (
    <div>
      <div
        className="p-5 bg-warning "
        style={{
          borderBottomRightRadius: "2rem", // Or "50px", "100px" etc.
          borderBottomLeftRadius: "2rem", // Optional: keep left side subtle
        }}
      >
        <div className="d-flex align-items-center justify-content-start mb-3">
          <div
            className="bg-white rounded-circle d-flex justify-content-center align-items-center  me-3"
            style={{ width: "40px", height: "40px", cursor: "pointer" }}
          >
            <FaArrowLeft className="text-dark" size={18} />
          </div>
          <h4 className="mb-0 text-white">Appointment Details</h4>
        </div>
      </div>
      <div className="container mt-4">
        <div className="list-group">
          {appointments.map((item) => (
            <div
              key={item.id}
              className="list-group-item list-group-item-action shadow-sm mb-3 rounded"
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h6 className="mb-1">{item.name}</h6>
                  <small className="text-muted d-block">
                    {item.profession}
                  </small>
                  <span className={`badge bg-${statusColor[item.status]} my-2`}>
                    {item.status}
                  </span>
                </div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle"
                  width="60"
                  height="60"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <hr className="my-2" />
              <div className="text-muted small d-flex justify-content-between">
                <p className="mb-0">{item.date}</p>
                <p className="mb-0">{item.time}</p>
                <p className="mb-0">{item.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Appoinments