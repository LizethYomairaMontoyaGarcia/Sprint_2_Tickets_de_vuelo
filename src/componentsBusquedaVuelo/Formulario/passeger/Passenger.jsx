import React, { useState, useEffect, useContext } from "react";
import {
  ContainerPassenger,
  Button,
  Modal,
  ModalContent,
  Container,
  Title,
  PassengerButton,
  ModalButton,
  DivPersonAge,
  Div,
} from "./PassengerStyled";
import { searchParamsContext } from "../../../routes/AppRoutes";

const Passenger = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [baby, setBaby] = useState(0);
  //const [selectedPassengers, setSelectedPassengers] = useState({
  //adults: 0,
  // children: 0,
  // baby: 0,
  //});
//global
const { selectedPassengers, setSelectedPassengers } =
useContext(searchParamsContext);

  // Leer los valores almacenados en el sessionStorage al cargar el componente
 

  // Guardar los valores seleccionados en el sessionStorage
  useEffect(() => {
    const passengersToStore = JSON.stringify(selectedPassengers);
    sessionStorage.setItem("passengers", passengersToStore);
  }, [selectedPassengers]);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const increasePassengerCount = (type) => {
    if (type === "adults") {
      setAdults(adults + 1);
    } else if (type === "children") {
      setChildren(children + 1);
    } else if (type === "baby") {
      setBaby(baby + 1);
    }
  };

  const decreasePassengerCount = (type) => {
    if (type === "adults" && adults > 0) {
      setAdults(adults - 1);
    } else if (type === "children" && children > 0) {
      setChildren(children - 1);
    } else if (type === "baby" && baby > 0) {
      setBaby(baby - 1);
    }
  };

  const handleModalConfirm = () => {
    setSelectedPassengers({
      adults,
      children,
      baby,
    });
    toggleModal();
  };

  return (
    <ContainerPassenger>
      <Button onClick={toggleModal}>Pasajeros</Button>

      <div>
        {selectedPassengers.adults} Adultos, {selectedPassengers.children}{" "}
        Niños, {selectedPassengers.baby} Bebés
      </div>

      {modalOpen && (
        <Modal>
          <ModalContent>
            <Container>
              <DivPersonAge>
                <Title>Adultos</Title>
                <p>(13 + años)</p>
              </DivPersonAge>
              <Div>
                <PassengerButton
                  onClick={() => decreasePassengerCount("adults")}
                >
                  -
                </PassengerButton>
                <span>{adults}</span>
                <PassengerButton
                  onClick={() => increasePassengerCount("adults")}
                >
                  +
                </PassengerButton>
              </Div>
            </Container>

            <Container>
              <DivPersonAge>
                <Title>Niños</Title>
                <p>(2 - 12 años)</p>
              </DivPersonAge>
              <Div>
                <PassengerButton
                  onClick={() => decreasePassengerCount("children")}
                >
                  -
                </PassengerButton>
                <span>{children}</span>
                <PassengerButton
                  onClick={() => increasePassengerCount("children")}
                >
                  +
                </PassengerButton>
              </Div>
            </Container>

            <Container>
              <DivPersonAge>
                <Title>Bebés</Title>
                <p>(0 - 1 años)</p>
              </DivPersonAge>
              <Div>
                <PassengerButton onClick={() => decreasePassengerCount("baby")}>
                  -
                </PassengerButton>
                <span>{baby}</span>
                <PassengerButton onClick={() => increasePassengerCount("baby")}>
                  +
                </PassengerButton>
              </Div>
            </Container>

            <ModalButton onClick={handleModalConfirm}>Confirmar</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </ContainerPassenger>
  );
};

export default Passenger;
