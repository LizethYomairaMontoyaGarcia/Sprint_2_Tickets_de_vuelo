import React from 'react';
import VuelosConMaleta from '../componentsComunes/VuelosConMaleta/VuelosConMaleta';
import ResumenReservacion from '../componentsComunes/ResumenReservacion/ResumenReservacion';
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
