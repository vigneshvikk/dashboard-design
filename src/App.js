import React from 'react'
import { useState } from "react";
import AgentList from './AgentList';
import DoctorDetails from './DoctorDetails';
import AppointmentConfirmationModal from "./AppointmentConfirmationModal";






function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
      <AppointmentConfirmationModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default App