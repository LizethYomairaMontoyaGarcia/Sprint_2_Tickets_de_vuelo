import React, { useState } from 'react';

import {ContainerPassenger, Button, Modal, ModalContent, Container, Title, PassengerButton, ModalButton } from  './PassengerStyled';


const Passenger = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [selectedPassengers, setSelectedPassengers] = useState({
    adults: 0,
    children: 0,
    babies: 0,
  });

  //'toggleModal': Esta función se encarga de cambiar el estado de 'modalOpen' entre 'true' y 'false'.
  // Es utilizada para abrir y cerrar la ventana modal al hacer clic en el botón "Pasajeros".
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  //'increasePassengerCount': Esta función se encarga de aumentar la cantidad de pasajeros de un tipo específico (adultos, niños o bebés).
  // Recibe como parámetro el tipo de pasajero y actualiza el estado correspondiente utilizando 'setAdults', 'setChildren' o 'setBabies'.
  const increasePassengerCount = (type) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'children') {
      setChildren(children + 1);
    } else if (type === 'babies') {
      setBabies(babies + 1);
    }
  };

  //'decreasePassengerCount': Esta función se encarga de disminuir la cantidad de pasajeros de un tipo específico (adultos, niños o bebés). 
  //Recibe como parámetro el tipo de pasajero y verifica si la cantidad actual es mayor a 0 antes de disminuirlo utilizando 'setAdults', 'setChildren' o 'setBabies'.
  const decreasePassengerCount = (type) => {
    if (type === 'adults' && adults > 0) {
      setAdults(adults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1);
    } else if (type === 'babies' && babies > 0) {
      setBabies(babies - 1);
    }
  };

  //'handleModalConfirm': Esta función se ejecuta al hacer clic en el botón "Confirmar" dentro de la ventana modal. 
  //Actualiza el estado 'selectedPassengers' con la cantidad seleccionada de adultos, niños y bebés. Luego, llama a 'toggleModal' para cerrar la ventana modal.
  const handleModalConfirm = () => {
    setSelectedPassengers({
      adults,
      children,
      babies,
    });
    toggleModal();
  };

  return (
    <ContainerPassenger>
      <Button onClick={toggleModal}>Pasajeros</Button>

      <div>
        {selectedPassengers.adults} Adultos, {selectedPassengers.children} Niños, {selectedPassengers.babies} Bebés
      </div>

      {modalOpen && (
        <Modal>
          <ModalContent>
            <Container>
              <Title>Adultos</Title>
              <div>
                <PassengerButton onClick={() => decreasePassengerCount('adults')}>-</PassengerButton>
                <span>{adults}</span>
                <PassengerButton onClick={() => increasePassengerCount('adults')}>+</PassengerButton>
                </div>
            </Container>

            <Container>
              <Title>Niños</Title>
              <div>
                <PassengerButton onClick={() => decreasePassengerCount('children')}>-</PassengerButton>
                <span>{children}</span>
                <PassengerButton onClick={() => increasePassengerCount('children')}>+</PassengerButton>
              </div>
            </Container>

            <Container>
              <Title>Bebés</Title>
              <div>
                <PassengerButton onClick={() => decreasePassengerCount('babies')}>-</PassengerButton>
                <span>{babies}</span>
                <PassengerButton onClick={() => increasePassengerCount('babies')}>+</PassengerButton>
              </div>
            </Container>
            

            <ModalButton onClick={handleModalConfirm}>Confirmar</ModalButton>
          </ModalContent>
        </Modal>
      )}
    </ContainerPassenger>
  );
};

export default Passenger;
