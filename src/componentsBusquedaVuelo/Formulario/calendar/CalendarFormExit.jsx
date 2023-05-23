import React, { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

Modal.setAppElement("#root");

const CalendarExit = ({ isOpen, onRequestClose }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const closeModal = () => {
    setSelectedDate(null);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Calendario"
    >
      <h1>Calendario</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Seleccione una fecha"
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
      <button onClick={closeModal}>Cerrar</button>
    </Modal>
  );
};


export default CalendarExit;