import React from 'react';
import {
  DetallesReservacion,
  CostosVuelo,
  CostoItem,
} from './ResumenReservacionStyled';


const ResumenReservacion = () => {


// Validar la ciudad de destino

const ciudadOrigen = sessionStorage.getItem("selectedCityOrigin");
const ciudadDestino = sessionStorage.getItem("selectedCityDestination");
const cpasajeros = sessionStorage.getItem("passengers");

// Parsea la cadena almacenada en sessionStorage a un objeto
const pasajerosObjeto = JSON.parse(cpasajeros);

// Obtiene la cantidad de adultos, niños y bebés del objeto
const adultos = pasajerosObjeto.adults;
const niños = pasajerosObjeto.children;
const bebes = pasajerosObjeto.baby;

// Suma la cantidad de adultos, niños y bebés para obtener el total
const totalPasajeros = adultos + niños + bebes;

const vuelosEncontrados = JSON.parse(localStorage.getItem('vuelosEncontrados'));
let horariosIda = [];
let horariosRegreso = [];

//----------------------------------
let duracionVueloexit = '';
let duracionVueloreturn = '';
let codigoAeropuertoDestino = '';
let codigoAeropuertoOrigen = '';
let costoVuelo = '';
let horaSalidaexit = '';
let horaSalidaAltexit = '';
let horaLlegadaexit = '';
let horaLlegadaAltexit = '';
let horaSalidareturn = '';
let horaSalidaAltreturn ='';
let horaLlegadareturn ='';
let horaLlegadaAltreturn = '';
let pasajeros = totalPasajeros.toString();

//let  = '';
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
    codigoAeropuertoOrigen = vuelosEncontrados.departure_airport.code;
    codigoAeropuertoDestino = vueloEncontrado.arrival_airport.code;
    horaSalidaexit = vueloEncontrado.exit.departure_time;
    horaSalidaAltexit = vueloEncontrado.exit.arrival_time_alt;
    horaLlegadaexit = vueloEncontrado.exit.arrival_time;
    horaLlegadaAltexit = vueloEncontrado.exit.arrival_time_alt;
    duracionVueloexit = vueloEncontrado.exit.duration;
    horaSalidareturn = vueloEncontrado.return.departure_time;
    horaSalidaAltreturn = vueloEncontrado.return.arrival_time_alt;
    horaLlegadareturn = vueloEncontrado.return.arrival_time;
    horaLlegadaAltreturn = vueloEncontrado.return.arrival_time_alt;
    duracionVueloreturn = vueloEncontrado.return.duration;
    costoVuelo = vueloEncontrado.price;

    // Utiliza las constantes como necesites
    console.log(cpasajeros);
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

//Trayendo costos de las maletas del session

//Operaciones para sumar

// Utiliza las constantes horariosIda y horariosRegreso según tus necesidades
console.log(horariosIda);
console.log(horariosRegreso);

  // ------ LLENADO DE LOS RECUADROS
// Obtener las fechas de ida y regreso del sessionStorage
const selectedDateReturn = sessionStorage.getItem("selectedDateReturn");
const selectedDateOutcome = sessionStorage.getItem("selectedDateOutcome");

// Extraer campos de la fecha de ida
const fechaSalidaObj = JSON.parse(selectedDateOutcome);
const fechasalida = `${fechaSalidaObj.day} / ${fechaSalidaObj.month} / ${fechaSalidaObj.year}`;

// Extraer campos de la fecha de regreso (si existe)
let fechallegada = "";
if (selectedDateReturn) {
  const fechaLlegadaObj = JSON.parse(selectedDateReturn);
  fechallegada = `${fechaLlegadaObj.day} / ${fechaLlegadaObj.month} / ${fechaLlegadaObj.year}`;
}


const detallesReservacion = {
  Pasajeros: pasajeros,

  Ocode: codigoAeropuertoOrigen,
  OHoraS: horaSalidaexit,
  OHoraL: horaLlegadaexit,

  Rcode: codigoAeropuertoDestino,
  RHoraS: horaSalidareturn,
  RHoraL: horaLlegadareturn,
   //Agrega más detalles de la reservación aquí
};
const costosVuelo = {
  costoVuelo: costoVuelo,
  costoMaletas: '$50',
  iva: '$75',
  total: '$625',
};

  return (
    <div>
        <h2>Tu reservación</h2>
      <DetallesReservacion>
        <div>
          <p>Pasajeros: {detallesReservacion.Pasajeros}</p>
        </div>
        <div className='vuelosalida'>
          <p>Vuelo de salida</p>
          <div className='codigos'>
             <h2>{detallesReservacion.Ocode}</h2>
             <p>{detallesReservacion.OHoraS}</p>
             <div>____</div>
             <h2>{detallesReservacion.Rcode}</h2>
             <p>{detallesReservacion.OHoraL}</p>
          </div>
          <p>{fechasalida}</p>
        </div>

        {sessionStorage.getItem("selectedDateReturn") && (
        <div className='vueloregreso'>
          <p>Vuelo de regreso</p>
          <div className='codigos'>
            <div className='vertical'>
              <h2>{detallesReservacion.Rcode}</h2>
              <p>{detallesReservacion.RHoraS}</p>
            </div>
             
             <div>____</div>

             <div className='vertical'>
              <h2>{detallesReservacion.Ocode}</h2>
              <p>{detallesReservacion.RHoraL}</p>
             </div>
          </div>
          <p>{fechallegada}</p>
        </div>
        )}

      </DetallesReservacion>
      
      <h2>Costos de Vuelo</h2>
      <CostosVuelo>
        <CostoItem>
          <p>Costo de Vuelo: {costosVuelo.costoVuelo}</p>
          <p>Costo de Maletas: {costosVuelo.costoMaletas}</p>
          <p>IVA: {costosVuelo.iva}</p>
          <p>Total: {costosVuelo.total}</p>
        </CostoItem>
      </CostosVuelo>
    </div>
  );
};

export default ResumenReservacion;
