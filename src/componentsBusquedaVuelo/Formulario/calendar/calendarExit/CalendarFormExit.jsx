import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "react-modal";
import Close from "../../../../images/close.png";
import { ImgClose, DivCloseArrows, DivModal, H2Arrows } from "./CalendarFormExitStyled";

function CalendarExit() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [value, onChange] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDateSelect = (date) => {
    onChange(date);
    setSelectedDate(date);
  };

  return (
    <div>
      <p onClick={openModal}>Salida</p>
      <DivModal>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <DivCloseArrows>
          <H2Arrows>Selecciona tus fechas</H2Arrows>
          <button onClick={closeModal}>
            <ImgClose src={Close} alt="close" />
          </button>
        </DivCloseArrows>

        <Calendar onChange={handleDateSelect} value={value} />

        <input
          type="text"
          value={selectedDate ? selectedDate.toDateString() : ""}
          readOnly
        />
      </Modal>
      </DivModal>
    </div>
  );
}

export default CalendarExit;
