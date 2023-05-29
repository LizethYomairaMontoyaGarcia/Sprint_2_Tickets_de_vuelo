import React, { useState } from 'react';
import {
  VuelosConMaletasContainer,
  HorariosList,
  HorarioItem,
  MaletasList,
  MaletaItem,
  MaletaImage,
  MaletaPrice,
} from './VuelosConMaletaStyled';
import { Link } from 'react-router-dom';

const VuelosConMaletas = () => {
  const [idaMaletaSeleccionada, setIdaMaletaSeleccionada] = useState(null);
  const [regresoMaletaSeleccionada, setRegresoMaletaSeleccionada] = useState(null);

  const handleMaletaSeleccionada = (maleta, vuelo) => {
    if (vuelo === 'ida') {
      setIdaMaletaSeleccionada(maleta);
    } else if (vuelo === 'regreso') {
      setRegresoMaletaSeleccionada(maleta);
    }
  };

  const horariosIda = [
    { horario: '10:00 AM', llegada: '12:00 PM' },
    { horario: '2:00 PM', llegada: '4:00 PM' },
  ];
  const horariosRegreso = [
    { horario: '8:00 AM', llegada: '10:00 AM' },
    { horario: '6:00 PM', llegada: '8:00 PM' },
  ];
  const opcionesMaletas = [
    {
      nombre: '1 objeto personal',
      imagen: '/src/images/maleta.png',
      precio: 0,
    },
    {
      nombre: 'Equipaje de mano',
      imagen: '/src/images/maleta.png',
      precio: 10,
    },
    {
      nombre: 'Equipaje 25kg',
      imagen: '/src/images/maleta.png',
      precio: 20,
    },
  ];

  return (
    <VuelosConMaletasContainer>
      <Link to="/">Volver a la página principal</Link>

      <div>
        <h2>Vuelo de Ida</h2>
        <p>Ciudad A a Ciudad B</p>
        <div>
          <p>Selección de horarios y equipajes</p>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <HorariosList>
              {horariosIda.map((horario) => (
                <HorarioItem key={horario.horario}>
                  {horario.horario} - {horario.llegada}
                  <MaletasList>
                    {opcionesMaletas.map((maleta) => (
                      <MaletaItem
                        key={maleta.nombre}
                        isSelected={idaMaletaSeleccionada === maleta}
                        onClick={() => handleMaletaSeleccionada(maleta, 'ida')}
                      >
                        <MaletaImage src={maleta.imagen} alt={maleta.nombre} />
                        {maleta.nombre}
                        <MaletaPrice>${maleta.precio}</MaletaPrice>
                      </MaletaItem>
                    ))}
                  </MaletasList>
                </HorarioItem>
              ))}
            </HorariosList>
          </div>
        </div>
      </div>

      <div>
        <h2>Vuelo de Regreso</h2>
        <p>Ciudad B a Ciudad A</p>
        <div>
          <p>Selección de horarios y equipajes</p>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <HorariosList>
              {horariosRegreso.map((horario) => (
                <HorarioItem key={horario.horario}>
                  {horario.horario} - {horario.llegada}
                  <MaletasList>
                    {opcionesMaletas.map((maleta) => (
                      <MaletaItem
                        key={maleta.nombre}
                        isSelected={regresoMaletaSeleccionada === maleta}
                        onClick={() => handleMaletaSeleccionada(maleta, 'regreso')}
                      >
                        <MaletaImage src={maleta.imagen} alt={maleta.nombre} />
                        {maleta.nombre}
                        <MaletaPrice>${maleta.precio}</MaletaPrice>
                      </MaletaItem>
                    ))}
                  </MaletasList>
                </HorarioItem>
              ))}
            </HorariosList>
          </div>
        </div>
      </div>

      <Link to="/checkout">Continuar al pago</Link>
    </VuelosConMaletasContainer>
  );
};

export default VuelosConMaletas;
