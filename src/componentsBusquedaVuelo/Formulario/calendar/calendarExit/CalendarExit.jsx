import React, { useState, useEffect } from "react";
import {
  Modal,
  DateClose,
  WeekDays,
  Week,
  Days,
  Day,
} from "./CalendarExitStyled";
import { AiOutlineClose } from "react-icons/ai";
import { ModalDestinationCity } from "../../destination/DestinationStyled";
import axios from "axios";

const CalendarExit = () => {
  const today = new Date();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [storedCityDestination, setStoredCityDestination] = useState("");
  //const [citiesOrigin, setCitiesOrigin] = useState([]);
  const [citiesDestination, setCitiesDestination] = useState([]);

  const dateExit = async () => {
    try {
      const citiesOrigin = sessionStorage.getItem("selectedCityOrigin");
      const storedCityDestination = sessionStorage.getItem(
        "selectedCityDestination"
      );
      const response = await axios.get("http://localhost:3000/origins");
      if (citiesOrigin && storedCityDestination) {
        console.log("::response data calenda",response.data)
        const vueloDeseado = response.data.filter((item) =>
          item.departure_airport.city
            .toLowerCase()
            .includes(citiesOrigin.toLowerCase())
        ).map((item) =>
              item.destinations.filter((destination) =>
                destination.arrival_airport.city
                  .toLowerCase()
                  .includes(storedCityDestination.toLowerCase())
              )
            )
            .flat();
          setCitiesDestination(vueloDeseado);
          console.log("::VUELO DESEADO",vueloDeseado )
        }
      
    } catch (error) {
      console.error("Error en la petición:", error);
    }
  };

  useEffect(() => {
    // Obtener el valor guardado en el Session Storage del destination
    const storedCityDestination = sessionStorage.getItem(
      "selectedCityDestination"
    );
    if (storedCityDestination) {
      setStoredCityDestination(storedCityDestination);
    }
  }, []);

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setShowDate(true);
    setModalOpen(false);

    // Guardar la información en Session Storage
    sessionStorage.setItem(
      "selectedDateExit",
      JSON.stringify({ day, month: selectedMonth, year: selectedYear })
    );
  };

  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const formattedDate = `${selectedDay}/${selectedMonth + 1}/${selectedYear}`;

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

  return (
    <div>
      <span onClick={() => { dateExit(); openModal(); }}>----</span>
      <p >Salida</p>

      <div>
        {showDate && <p>{formattedDate}</p>}

        {modalOpen && (
          <ModalDestinationCity>
            <Modal>
              <DateClose>
                <h1>Selecciona Tus fechas</h1>
                <span onClick={closeModal}>
                  <AiOutlineClose size={24} />
                </span>
              </DateClose>

              <p>Fecha de salida</p>
              <div>
                <select value={selectedMonth} onChange={handleMonthChange}>
                  <option value={1}>Enero</option>
                  <option value={2}>Febrero</option>
                  <option value={3}>Marzo</option>
                  <option value={4}>Abril</option>
                  <option value={5}>Mayo</option>
                  <option value={6}>Junio</option>
                  <option value={7}>Julio</option>
                  <option value={8}>Agosto</option>
                  <option value={9}>Septiembre</option>
                  <option value={10}>Octubre</option>
                  <option value={11}>Noviembre</option>
                  <option value={12}>Diciembre</option>
                </select>
                <select value={selectedYear} onChange={handleYearChange}>
                  <option value={2023}>2023</option>
                  <option value={2024}>2024</option>
                  <option value={2025}>2025</option>
                </select>
              </div>

              <WeekDays>
                <Week className="weekdays">
                  {weekdays.map((weekday) => (
                    <div className="weekday" key={weekday}>
                      {weekday}
                    </div>
                  ))}
                </Week>

                <Days className="days">
                  {daysArray.map((day) => (
                    <Day
                      key={day}
                      onClick={() => handleDayClick(day)}
                      className={selectedDay === day ? "selected" : ""}
                    >
                      {day}
                    </Day>
                  ))}
                </Days>
              </WeekDays>
            </Modal>
          </ModalDestinationCity>
        )}
      </div>
    </div>
  );
};

export default CalendarExit;
