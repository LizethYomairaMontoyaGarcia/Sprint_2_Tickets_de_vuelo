import React from 'react';
import VuelosConMaleta from './VuelosConMaleta/VuelosConMaleta';
import ResumenReservacion from './ResumenReservacion/ResumenReservacion';
import { FlightSelectorContainer } from './FlightSelectorsStyled';

const FlightSelector = () => {
  return (
    <FlightSelectorContainer>
      <VuelosConMaleta />
      <ResumenReservacion />
    </FlightSelectorContainer>
  );
};

export default FlightSelector;
