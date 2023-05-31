import React from 'react';
import {
  DetallesReservacion,
  CostosVuelo,
  CostoItem,
} from './ResumenReservacionStyled';
import { Link } from 'react-router-dom';


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

//--------------------------

const costosVuelo = {
  costoVuelo: costoVuelo,
  costoMaletas: 0,
  iva: 0,
  total: 0 * pasajeros,
};

// Obtener los datos de las maletas del session storage
const selectedMaletas = JSON.parse(sessionStorage.getItem("selectedMaletas"));

// Verificar si los datos de las maletas existen en el session storage
if (selectedMaletas) {
  // Recorrer los IDs de las maletas seleccionadas
  Object.keys(selectedMaletas).forEach((maletaId) => {
    const maleta = selectedMaletas[maletaId];
    if (maleta && maleta.precio) {
      // Sumar el precio de la maleta al costo total de las maletas
      costosVuelo.costoMaletas += parseFloat(maleta.precio);
    }
  });
} else {
  // Los datos de las maletas no están definidos en el session storage
  console.log("Los datos de las maletas no están definidos");
}

// Calcular el IVA (asumiendo una tasa de impuesto del 10%)
const tasaIVA = 0.1;
costosVuelo.iva = costosVuelo.costoVuelo * tasaIVA;

// Calcular el total sumando los costos de vuelo y el IVA
costosVuelo.total =
  parseFloat(costoVuelo) +
  parseFloat(costosVuelo.costoMaletas) +
  parseFloat(costosVuelo.iva);


// Actualizar los valores en la constante costosVuelo
costosVuelo.costoMaletas = `$${costosVuelo.costoMaletas}`;
costosVuelo.iva = `$${costosVuelo.iva.toFixed(2)}`; // Redondear el IVA a 2 decimales
costosVuelo.total = `$${costosVuelo.total}`;

// Mostrar los costos actualizados
console.log("Costo de las maletas:", costosVuelo.costoMaletas);
console.log("IVA:", costosVuelo.iva);
console.log("Total:", costosVuelo.total);


//----------------------------------------------

const costoMaletas = costosVuelo.costoMaletas;
const iva = costosVuelo.iva;
const total = costosVuelo.total;


//----------------------------------------------


  return (
    <div>
        <h2>Tu reservación</h2>
      <DetallesReservacion className='DetallesReservacion'>
        <div>
          <p>Pasajeros: {detallesReservacion.Pasajeros}</p>
        </div>
        <div className='vuelosalida'>
          <p>Vuelo de salida</p>
          <div className='codigos'>
            <div className='unidad'>
              <h2>{detallesReservacion.Ocode}</h2>
              <p>{detallesReservacion.OHoraS}</p>
            </div>
            <div className='linea'></div>
            <div className='unidad'>
              <h2>{detallesReservacion.Rcode}</h2>
              <p>{detallesReservacion.OHoraL}</p>
            </div>
          </div>

          <p>{fechasalida}</p>
        </div>

        {sessionStorage.getItem("selectedDateReturn") && (
        <div className='vueloregreso'>
          <p>Vuelo de regreso</p>
          <div className='codigos'>
            <div className='unidad'>
              <h2>{detallesReservacion.Rcode}</h2>
              <p>{detallesReservacion.RHoraS}</p>
            </div>
             
            <div className='linea'></div>


             <div className='unidad'>
              <h2>{detallesReservacion.Ocode}</h2>
              <p>{detallesReservacion.RHoraL}</p>
             </div>
          </div>
          <p>{fechallegada}</p>
        </div>
        )}

      </DetallesReservacion>
      
      <h2>Costos de Vuelo</h2>
      <CostosVuelo className='CostosVuelo'>
        <CostoItem className='CostoItem'>
          <p>Costo de Tiquete Und: {costosVuelo.costoVuelo}</p>
          <p>Costo de Maletas: {costoMaletas}</p>
          <p>IVA: {iva}</p>
          <p>Total Und: {total}</p>
        </CostoItem>
        
      </CostosVuelo>

      <Link to="/seatSelector"
            style={{
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
      >
  Continuar seleccion de silla</Link>
      
    </div>
    
  );
};

export default ResumenReservacion;
