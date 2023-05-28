import React, { useState, useContext } from "react";
import {
  Container,
  ContainerTwo,
  ButtonFlight,
  FormularioFlight,
  Calendar,
  SpanSpan,
} from "./StyleFormularioFlight";
import Passenger from "./passeger/Passenger";
import Plane from "../../images/plane.svg";
import { useNavigate } from "react-router-dom";
import CalendarExit from "./calendar/calendarExit/CalendarExit";
import CalendarIncome from "./calendar/calendarIncome/CalendarIncome";
import Origin from "./origin/OriginCity";
import Destination from "./destination/Destination";
import CalendarIcono from "../../images/dateCalendar.png";
import { searchParamsContext } from "../../routes/AppRoutes";
import Swal from "sweetalert2";

export function Formulario({ viaje }) {
  //-----------------------------------
  const navigate = useNavigate();
  //const handleButton = () => {
  //console.log("entre");
  // navigate("/flightSelector");
  //};

  //-----------------------------------
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };

  //-----------------------------------

  const {
    selectedCityOrigin,
    //setSelectedCityOrigin,
    selectedCityDestination,
    //setSelectedCityDestination,
    dateCalendarExit,
    // setDateCalendarExit,
    dateCalendarIcome,
    // setdateCalendarIcome,
    selectedPassengers,
    // setSelectedPassengers,
  } = useContext(searchParamsContext);

  const handleButton = () => {
    if (
      !selectedCityOrigin ||
      !selectedCityDestination ||
      !dateCalendarExit ||
      !dateCalendarIcome ||
      !selectedPassengers
    ) {
      console.log("ciudad de origin" + selectedCityOrigin);
      console.log("ciudad de destino" + selectedCityDestination);
      console.log("fecha salida", dateCalendarExit);
      console.log("fecha retorno", dateCalendarIcome);
      console.log("pasajero", selectedPassengers);

      Swal.fire("Oopss!", "No has completado todos los datos", "error");
    } else {
      const params = {
        selectedCityOrigin,
        selectedCityDestination,
        dateCalendarExit,
        dateCalendarIcome,
        selectedPassengers,
      };
      console.log("parametros", params);
      Swal.fire("Good job!", "Genial, datos Confirmados", "success").then(
        () => {
          sessionStorage.setItem("searchParams", JSON.stringify(params));
          navigate("/flightSelector");
        }
      );
    }
  };

  return (
    <>
      <FormularioFlight>
        <Container>
          <div>
            <Origin />
            <p>Origen</p>
          </div>
        </Container>

        <Container>
          <div>
            <Destination />
            <p>Seleccione un destino</p>
          </div>
        </Container>

        <ContainerTwo>
          <div>
            <Calendar src={CalendarIcono} alt="calendario" />
            <CalendarExit isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </ContainerTwo>

        {/* Campo Hora de Regreso */}
        {viaje === "redondo" && (
          <ContainerTwo>
            <div>
              <Calendar src={CalendarIcono} alt="calendario" />
              <CalendarIncome />
            </div>
          </ContainerTwo>
        )}

        <ContainerTwo>
          <div>
            <Passenger />
          </div>
        </ContainerTwo>
        <ContainerTwo>
          <div>
            <p>¿Tienes un codigo de promocion?</p>
            <SpanSpan>----</SpanSpan>
          </div>
        </ContainerTwo>
      </FormularioFlight>
      <ButtonFlight
        type="button"
        onClick={() => {
          handleButton();
        }}
      >
        <img src={Plane} alt="Avion" /> Buscar vuelos
      </ButtonFlight>
    </>
  );
}
