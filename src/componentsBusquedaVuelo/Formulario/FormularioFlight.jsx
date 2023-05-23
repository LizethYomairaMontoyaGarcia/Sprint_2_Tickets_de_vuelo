import React, { useState } from "react";
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
import CalendarExit from "./calendar/CalendarFormExit";
import CalendarIncome from "./calendar/CalendarFormIncome";
import Origin from "./origin/OriginCity";
import Destination from "./destination/Destination";
import CalendarIcono from "../../images/dateCalendar.png";

export function Formulario() {
  const navigate = useNavigate();

  const handleButton = () => {
    console.log("entre");
    navigate("/flightSelector");
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
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
        <ContainerTwo onClick={openModal}>
          <div>
            <Calendar src={CalendarIcono} alt="calendario" />
            <CalendarExit isOpen={modalIsOpen} onRequestClose={closeModal} />
          </div>
        </ContainerTwo>
        <ContainerTwo>
          <div>
            <Calendar src={CalendarIcono} alt="calendario" />
            <CalendarIncome />
          </div>
        </ContainerTwo>
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
      <ButtonFlight type="button" onClick={() => handleButton()}>
        <img src={Plane} alt="Avion" /> Buscar vuelos
      </ButtonFlight>
    </>
  );
}
