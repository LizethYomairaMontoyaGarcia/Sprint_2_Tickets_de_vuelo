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
import { Modal } from "./CalendarExitStyled";
import {Calendar, SpanExit, Div, DivExit, Exit} from "./CalendarExitStyled"
//para manejar las fechas y realizar operaciones
dayjs.extend(isBetweenPlugin);
export default function CalendarExit() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const [dateExit, setDateExit] = useState({});

  const { dateCalendarExit, setDateCalendarExit } =
    useContext(searchParamsContext);

  let infoDateExit = {};
  const calendarOperation = (date) => {
    infoDateExit = { day: date.$D, month: date.$M+1, year: date.$y };
    setDateExit(infoDateExit);
    // Guardar la información en Session Storage
    sessionStorage.setItem(
      "selectedDateOutcome",
      JSON.stringify(infoDateExit)
    );
    setDateCalendarExit({ infoDateExit });
    closeModal();
  };

  return (
    <div>
      <DivExit>
      <Calendar
        onClick={() => {
          openModal();
        }}
        src={CalendarIcono}
        alt="calendario"
      />
      <Div>
      <Exit
        onClick={() => {
          openModal();
        }}
      >
        Salida
      </Exit>
      <SpanExit
        onClick={() => {
          openModal();
        }}
      >
        {dateExit.day ? (
          <SpanExit>
            {dateExit.day}/{dateExit.month}/{dateExit.year}
          </SpanExit>
        ) : (
          <SpanExit>------</SpanExit>
        )}
      </SpanExit>
      </Div>
      </DivExit>
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
