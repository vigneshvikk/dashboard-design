import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function AppointmentCard() {
  const [location, setLocation] = useState("Chennai");
  const [visitType, setVisitType] = useState("Online");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [duration, setDuration] = useState("30");

  const locations = ["Chennai", "Mumbai", "Delhi"];
  const durations = ["15", "30", "45", "60"];
  const slots = [
    "10:00 AM",
    "11:30 AM",
    "1:00 PM",
    "3:30 PM",
    "5:00 PM",
    "6:30 PM",
  ];

  // Get next 30 days
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return {
      label: date.toLocaleDateString("en-US", {
        weekday: "short",
        day: "numeric",
        month: "short",
      }),
      value: date.toISOString().split("T")[0],
    };
  });

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div
        className="card p-4 shadow-sm"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h5 className="mb-3 text-center">Book Appointment</h5>

        {/* Location Dropdown */}
        <div className="mb-3">
          <label className="form-label">Location</label>
          <select
            className="form-select"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            {locations.map((loc, idx) => (
              <option key={idx} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>

        {/* Visit Type Buttons */}
        <div className="mb-3">
          <label className="form-label">Visit Type</label>
          <div className="btn-group w-100">
            {["Online", "Offline"].map((type) => (
              <button
                key={type}
                className={`btn ${
                  visitType === type ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setVisitType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Date Scroll */}
        <div className="mb-3">
          <label className="form-label">Select Date</label>
          <div className="d-flex overflow-auto gap-2 pb-1">
            {dates.map((date) => (
              <button
                key={date.value}
                className={`btn ${
                  selectedDate === date.value
                    ? "btn-primary"
                    : "btn-outline-secondary"
                } btn-sm`}
                onClick={() => {
                  setSelectedDate(date.value);
                  setSelectedSlot(null);
                }}
              >
                {date.label}
              </button>
            ))}
          </div>
        </div>

        {/* Slot Selection */}
        {selectedDate && (
          <div className="mb-3">
            <label className="form-label">Available Slots</label>
            <div className="d-flex overflow-auto gap-2 pb-1">
              {slots.map((slot) => (
                <button
                  key={slot}
                  className={`btn btn-sm ${
                    selectedSlot === slot
                      ? "btn-success"
                      : "btn-outline-success"
                  }`}
                  onClick={() => setSelectedSlot(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Duration Dropdown */}
        <div className="mb-3">
          <label className="form-label">Duration</label>
          <select
            className="form-select"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            {durations.map((d, idx) => (
              <option key={idx} value={d}>
                {d} minutes
              </option>
            ))}
          </select>
        </div>

        {/* Book Button */}
        <button
          className="btn btn-success w-100"
          disabled={!selectedDate || !selectedSlot}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
}

export default AppointmentCard;
