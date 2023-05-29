import React, { useState, useContext } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { AiOutlineClose } from "react-icons/ai";
import CalendarIcono from "../../../../images/calendar.svg";
import { searchParamsContext } from "../../../../routes/AppRoutes";
import dayjs from "dayjs";
import isBetweenPlugin from "dayjs/plugin/isBetween";
import { ModalDestinationCity } from "../../destination/DestinationStyled";
import { Modal, DivIcome, Div, Income, SpanIncome } from "./CalendarIncomeStyled";


dayjs.extend(isBetweenPlugin);
export default function CalendarIncome() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [dateIncome, setDateIncome] = useState({});

  const { dateCalendarIcome, setdateCalendarIcome } =
    useContext(searchParamsContext);
  let infoDateReturn = {};
  const calendarOperation = (date) => {
    infoDateReturn = { day: date.$D, month: date.$M+1, year: date.$y };
    setDateIncome(infoDateReturn);
    // Guardar la información en Session Storage
    sessionStorage.setItem(
      "selectedDateReturn",
      JSON.stringify(infoDateReturn)
    );
    setdateCalendarIcome({ infoDateReturn });
    closeModal();
  };

  return (
    <div>
      <DivIcome>
      <img
        onClick={() => {
          openModal();
        }}
        src={CalendarIcono}
        alt="calendario"
      />
      <Div>
      <Income
        onClick={() => {
          openModal();
        }}
      >
        Regreso
      </Income>

      <SpanIncome
        onClick={() => {
          openModal();
        }}
      >
        {dateIncome.day ? (
          <SpanIncome>
            {dateIncome.day}/{dateIncome.month}/{dateIncome.year}
          </SpanIncome>
        ) : (
          <SpanIncome>------</SpanIncome>
        )}
      </SpanIncome>
      </Div>
      </DivIcome>
      {modalOpen && (
        <ModalDestinationCity>
          <Modal>
            <h2>Selecciona Tus fechas</h2>
            <span onClick={closeModal}>
              <AiOutlineClose size={24} />
            </span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={dayjs(new Date())}
                onChange={(date) => calendarOperation(date)}
                minDate={dayjs(new Date())}
              />
            </LocalizationProvider>
          </Modal>
        </ModalDestinationCity>
      )}
    </div>
  );
}
