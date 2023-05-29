import React, { useState } from 'react';
import {
  VuelosConMaletasContainer,
  HorariosList,
  HorarioItem,
  MaletasList,
  MaletaItem,
} from './VuelosConMaletaStyled';
import { Link } from 'react-router-dom';


const VuelosConMaletas = () => {
  const [idaSeleccionado, setIdaSeleccionado] = useState(null);
  const [regresoSeleccionado, setRegresoSeleccionado] = useState(null);
  const [maletaSeleccionada, setMaletaSeleccionada] = useState(null);

  const handleIdaSeleccionado = (horario) => {
    setIdaSeleccionado(horario);
  };

  const handleRegresoSeleccionado = (horario) => {
    setRegresoSeleccionado(horario);
  };

  const handleMaletaSeleccionada = (maleta) => {
    setMaletaSeleccionada(maleta);
  };

  // Valores temporales mientras se generan los datos reales
  const horariosIda = [
    { horario: '10:00 AM', ciudad: 'Ciudad A' },
    { horario: '2:00 PM', ciudad: 'Ciudad B' },
  ];
  const horariosRegreso = [
    { horario: '8:00 AM', ciudad: 'Ciudad A' },
    { horario: '6:00 PM', ciudad: 'Ciudad B' },
  ];
  const opcionesMaletas = ['Pequeña', 'Mediana', 'Grande'];

  return (
    <VuelosConMaletasContainer>
      <Link to="/">Volver a la página principal</Link>
      <h2>Vuelo de Ida</h2>
      <HorariosList>
        {horariosIda.map((horario) => (
          <HorarioItem
            key={horario.horario}
            onClick={() => handleIdaSeleccionado(horario.horario)}
          >
            {horario.horario} - {horario.ciudad}
          </HorarioItem>
        ))}
      </HorariosList>

      <h2>Vuelo de Regreso</h2>
      <HorariosList>
        {horariosRegreso.map((horario) => (
          <HorarioItem
            key={horario.horario}
            onClick={() => handleRegresoSeleccionado(horario.horario)}
          >
            {horario.horario} - {horario.ciudad}
          </HorarioItem>
        ))}
      </HorariosList>

      <h2>Selección de Maletas</h2>
      <MaletasList>
        {opcionesMaletas.map((maleta) => (
          <MaletaItem
            key={maleta}
            onClick={() => handleMaletaSeleccionada(maleta)}
          >
            {maleta}
          </MaletaItem>
        ))}
      </MaletasList>
    </VuelosConMaletasContainer>
  );
};

export default VuelosConMaletas;
