import React, { useState, useEffect } from 'react';
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
import maletaImage from '../../images/maleta.png';
import data from '../../data/db.json';


const VuelosConMaletas = () => {
  
  const opcionesMaletas = [
    {
      nombre: '1 objeto personal',
      imagen: maletaImage,
      precio: 30000,
    },
    {
      nombre: 'Equipaje de mano',
      imagen: maletaImage,
      precio: 60000,
    },
    {
      nombre: 'Equipaje 25kg',
      imagen: maletaImage,
      precio: 100000,
    },
  ];

  const [selectedMaletas, setSelectedMaletas] = useState({});

  useEffect(() => {
    const storedMaletas = sessionStorage.getItem('selectedMaletas');

    if (storedMaletas) {
      setSelectedMaletas(JSON.parse(storedMaletas));
    }
  }, []);

  const handleMaletaSelection = (maleta, horarioId) => {
    setSelectedMaletas(prevState => {
      const updatedMaletas = { ...prevState };
  
      // Deseleccionar maletas del mismo vuelo
      const vueloId = Math.floor((horarioId - 1) / 2) + 1;
      const horarios = vueloId === 1 ? horariosIda : horariosRegreso;
      horarios.forEach(horario => {
        if (horario.id !== horarioId && updatedMaletas[horario.id] !== null) {
          updatedMaletas[horario.id] = null;
        }
      });
  
      // Seleccionar maleta actual
      updatedMaletas[horarioId] = maleta;
  
      sessionStorage.setItem('selectedMaletas', JSON.stringify(updatedMaletas));
      window.location.reload();

      return updatedMaletas;

    });
  };
  
//------------------------------------------
//----------------------------------------------
  
const ciudadOrigen = sessionStorage.getItem("selectedCityOrigin");
const ciudadDestino = sessionStorage.getItem("selectedCityDestination");

//----------------------------------
useEffect(() => {

  const vuelosEncontrados = data.flights.find(vuelo =>
    vuelo.departure_airport.city === ciudadOrigen &&
    vuelo.destinations.some(destino =>
      destino.arrival_airport.city === ciudadDestino
    )
  );

  localStorage.setItem('vuelosEncontrados', JSON.stringify(vuelosEncontrados));
}, []);

//----------------------------------
// Validar la ciudad de destino
const vuelosEncontrados = JSON.parse(localStorage.getItem('vuelosEncontrados'));
let horariosIda = [];
let horariosRegreso = [];

//----------------------------------
let duracionVueloexit = '';
let duracionVueloreturn = '';
//----------------------------------

if (vuelosEncontrados) {
  const vueloEncontrado = vuelosEncontrados.destinations.find(destino =>
    destino.arrival_airport.city === ciudadDestino
  );

  if (vueloEncontrado) {
    console.clear();

    // Obtener la información del vuelo
    const aeropuertoOrigen = vuelosEncontrados.departure_airport.name;
    const aeropuertoDestino = vueloEncontrado.arrival_airport.name;
    const codigoAeropuertoOrigen = vuelosEncontrados.departure_airport.code;
    const codigoAeropuertoDestino = vueloEncontrado.arrival_airport.code;
    const horaSalidaexit = vueloEncontrado.exit.departure_time;
    const horaSalidaAltexit = vueloEncontrado.exit.arrival_time_alt;
    const horaLlegadaexit = vueloEncontrado.exit.arrival_time;
    const horaLlegadaAltexit = vueloEncontrado.exit.arrival_time_alt;
    duracionVueloexit = vueloEncontrado.exit.duration;
    const horaSalidareturn = vueloEncontrado.return.departure_time;
    const horaSalidaAltreturn = vueloEncontrado.return.arrival_time_alt;
    const horaLlegadareturn = vueloEncontrado.return.arrival_time;
    const horaLlegadaAltreturn = vueloEncontrado.return.arrival_time_alt;
    duracionVueloreturn = vueloEncontrado.return.duration;
    const costoVuelo = vueloEncontrado.price;

    // Utiliza las constantes como necesites
    console.log(ciudadOrigen);
    console.log(ciudadDestino);
    console.log(aeropuertoOrigen);
    console.log(aeropuertoDestino);
    console.log(codigoAeropuertoOrigen);
    console.log(codigoAeropuertoDestino);
    console.log(horaSalidaexit);
    console.log(horaSalidaAltexit);
    console.log(horaLlegadaexit);
    console.log(horaLlegadaAltexit);
    console.log(duracionVueloexit);
    console.log(horaSalidareturn);
    console.log(horaSalidaAltreturn);
    console.log(horaLlegadareturn);
    console.log(horaLlegadaAltreturn);
    console.log(duracionVueloreturn);
    console.log(costoVuelo);


    horariosIda = [
      { id: 1, horario: horaSalidaexit, llegada: horaLlegadaexit },
      { id: 2, horario: horaSalidaAltexit, llegada: horaLlegadaAltexit },
    ];

    horariosRegreso = [
      { id: 3, horario: horaSalidareturn, llegada: horaLlegadareturn },
      { id: 4, horario: horaSalidaAltreturn, llegada: horaLlegadaAltreturn },
    ];
  }
//----------------------------------

}




// Utiliza las constantes horariosIda y horariosRegreso según tus necesidades
console.log(horariosIda);
console.log(horariosRegreso);

//----------------------------------
//----------------------------------
//----------------------------------
//----------------------------------

  return (
    <VuelosConMaletasContainer>
      

      <div className='vueloidacheck'>
        <h2>Vuelo de Ida</h2>
        <p>{ciudadOrigen} a {ciudadDestino}</p>
        <div>
          <p>Selección de horarios y equipajes</p>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <HorariosList>
            
              {horariosIda.map((horario) => (
                <HorarioItem key={horario.id} duracionVuelo={duracionVueloexit}>
                <div className='vuelo1'>
                  <div>{horario.horario}</div>
                  <div className='centro'>

                    <div>{duracionVueloexit}</div>
                    <div className='linea'></div>
                    <div>Sin escala</div>

                  </div>
                  <div>{horario.llegada}</div>
                </div>
                  <MaletasList>
                    {opcionesMaletas.map((maleta) => (
                      <MaletaItem
                        key={maleta.nombre}
                        active={
                          selectedMaletas[horario.id] &&
                          selectedMaletas[horario.id].nombre === maleta.nombre
                        }
                        onClick={() => handleMaletaSelection(maleta, horario.id)}
                      >
                        <MaletaImage src={maleta.imagen} alt={maleta.nombre} />
                        {maleta.nombre}
                        <MaletaPrice>${maleta.precio}</MaletaPrice>
                      </MaletaItem>
                    ))}
                  </MaletasList>
                </HorarioItem>
              ))}
              <Link to="/"style={{
          borderRadius: '20px',
          border: '1px solid #9e1071',
          textDecoration: 'none', // Establecer textDecoration en none

          backgroundColor: 'transparent',
          padding: '18px 18px',
          marginTop: '2rem',
          marginLeft: 'auto',
          fontSize: '16px',
          fontWeight: 'bold',
          width: '310px',
          color: '#9e1071',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}
          className="custom-link"
      >Cambiar vuelo</Link>
            </HorariosList>
          </div>
        </div>
      </div>

      {sessionStorage.getItem("selectedDateReturn") && (
      <div className='vueloregresocheck'>
        <h2>Vuelo de Regreso</h2>
        <p>{ciudadDestino} a {ciudadOrigen}</p>
        <div>
          <p>Selección de horarios y equipajes</p>
          <div style={{ display: 'flex', marginBottom: '20px' }}>
            <HorariosList>
              {horariosRegreso.map((horario) => (
                 <HorarioItem key={horario.id} duracionVuelo={duracionVueloreturn}>
                  <div className='vuelo2'>
                  <div>{horario.horario}</div>

                  <div className='centro'>
                    <div>{duracionVueloreturn}</div>
                    <div className='linea'></div>
                    <div>Sin escala</div>
                  </div>

                  <div>{horario.llegada}</div>
                  </div>
                  <MaletasList>
                    {opcionesMaletas.map((maleta) => (
                      <MaletaItem
                        key={maleta.nombre}
                        active={
                          selectedMaletas[horario.id] &&
                          selectedMaletas[horario.id].nombre === maleta.nombre
                        }
                        onClick={() => handleMaletaSelection(maleta, horario.id)}
                      >
                        <MaletaImage src={maleta.imagen} alt={maleta.nombre} />
                        {maleta.nombre}
                        <MaletaPrice>${maleta.precio}</MaletaPrice>
                      </MaletaItem>
                    ))}
                  </MaletasList>
                </HorarioItem>
              ))}
              <Link to="/"style={{
          borderRadius: '20px',
          border: '1px solid #9e1071',
          textDecoration: 'none', // Establecer textDecoration en none
          backgroundColor: 'transparent',
          padding: '18px 18px',
          marginTop: '2rem',
          marginLeft: 'auto',
          fontSize: '16px',
          fontWeight: 'bold',
          width: '310px',
          color: '#9e1071',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}
          className="custom-link"
      >Cambiar vuelo</Link>
            </HorariosList>
          </div>
        </div>
        </div>
    )}

      
    </VuelosConMaletasContainer>
  );
};

export default VuelosConMaletas;