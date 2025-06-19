import React from 'react'
import { FaUserCircle } from "react-icons/fa"; 
import { FaUserMd, FaGavel, FaPaintBrush } from "react-icons/fa"; // Example icons
import {
  FaHourglassHalf,
  FaCheckCircle,
  FaTimesCircle,
  FaBan,
  FaExclamationCircle,
} from "react-icons/fa";

const professions = [
  { label: "Doctor", icon: <FaUserMd size={24} className="text-primary" /> },
  { label: "Lawyer", icon: <FaGavel size={24} className="text-success" /> },
  { label: "Artist", icon: <FaPaintBrush size={24} className="text-danger" /> },
];

const statusItems = [
  {
    label: "Pending",
    icon: <FaHourglassHalf size={24} />,
    bg: "#ffc107", // yellow
    textColor: "text-dark",
  },
  {
    label: "Approved",
    icon: <FaCheckCircle size={24} />,
    bg: "#28a745", // green
    textColor: "text-white",
  },
  {
    label: "Rejected",
    icon: <FaTimesCircle size={24} />,
    bg: "#dc3545", // red
    textColor: "text-white",
  },
  {
    label: "Cancelled",
    icon: <FaBan size={24} />,
    bg: "#6c757d", // gray
    textColor: "text-white",
  },
  {
    label: "Completed",
    icon: <FaExclamationCircle size={24} />,
    bg: "#17a2b8", // blue
    textColor: "text-white",
  },
];


const appointments = [
  {
    id: 1,
    name: "John Doe",
    date: "2025-06-20",
    time: "10:00 AM",
    doctor: "Dr. Smith",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "2025-06-21",
    time: "11:30 AM",
    doctor: "Dr. Adams",
    status: "Pending",
  },
  {
    id: 3,
    name: "Mike Johnson",
    date: "2025-06-22",
    time: "02:00 PM",
    doctor: "Dr. Lee",
    status: "Cancelled",
  },
];

const statusColor = {
  Confirmed: "success",
  Pending: "warning",
  Cancelled: "danger",
};

function HomePage() {
  return (
    <>
      <div className="container-fluid bg-warning py-3 text-white">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="mb-0">Hi,John Doe</h3>
            <p>Greatings of the day!</p>
          </div>
          <FaUserCircle size={32} className="text-primary" />
        </div>

        <div>
          <h5>Let's find your needs</h5>
        </div>

        <div className="d-flex gap-4 p-1">
          {professions.map((item, index) => (
            <div key={index} className="text-center">
              <div
                className="bg-white rounded-circle d-flex justify-content-center align-items-center cursor-pointer shadow"
                style={{ width: "40px", height: "40px" }}
              >
                {item.icon}
              </div>
              <small className="d-block mt-2">{item.label}</small>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4 text-white">
        <div className="row g-3">
          {statusItems.map((item, index) => (
            <div
              className="col-6 col-md-2 "
              style={{ cursor: "pointer" }}
              key={index}
            >
              <div
                className="p-3 text-center border rounded"
                style={{
                  backgroundColor: item.bg,
                  color: item.textColor,
                  minHeight: "100px",
                }}
              >
                <div>{item.icon}</div>
                <div className="fw-semibold mt-2">{item.label}</div>
                <div className="fw-semibold mt-2">3</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4">
        <h4 className="mb-3">Upcoming Appointments</h4>
        <div className="table-responsive">
          <table className="table table-hover table-bordered align-middle shadow-sm">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Doctor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.id}</td>
                  <td>{appt.name}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>{appt.doctor}</td>
                  <td>
                    <span className={`badge bg-${statusColor[appt.status]}`}>
                      {appt.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



    </>
  );
}

export default HomePage