import React from 'react';
import {
  DetallesReservacion,
  CostosVuelo,
  CostoItem,
} from './ResumenReservacionStyled';


const ResumenReservacion = () => {
// Valores temporales mientras se generan los datos reales , esto se comenta cuando ya el sessio este listo
  const detallesReservacion = {
    Pasajeros: '1 Adulto , 1 nino',
    Origen: 'Ciudad A',
    OHoraS: '14:00',
    OHoraL: '16:00',
    Destino: 'Ciudad B',

    FOrigen: 'Ciudad A',
    FHoraS: '14:00',
    FHoraL: '16:00',
    FDestino: 'Ciudad B',

    OFecha: '00/00/00',
    FFecha: '00/00/00'
     //Agrega más detalles de la reservación aquí
  };
  const costosVuelo = {
    costoVuelo: '$500',
    costoMaletas: '$50',
    iva: '$75',
    total: '$625',
  };

  // Obtiene los valores del Session Storage
  // const detallesReservacion = JSON.parse(sessionStorage.getItem('detallesReservacion')) || {};
  // const costosVuelo = JSON.parse(sessionStorage.getItem('costosVuelo')) || {};

  return (
    <div>
        <h2>Tu reservación</h2>
      <DetallesReservacion>
        <p>Pasajeros: {detallesReservacion.Pasajeros}</p>
        <div>
            <p>Origen: {detallesReservacion.Origen}</p>
        </div>
        <div>
            <p>Destino: {detallesReservacion.Destino}</p>
        </div>
        <p>{detallesReservacion.OFecha}</p>
        <p>{detallesReservacion.FFecha}</p>
        {/* Agrega más detalles de la reservación aquí */}
      </DetallesReservacion>
      
      <h2>Costos de Vuelo</h2>
      <CostosVuelo>
        <CostoItem>Costo de Vuelo: {costosVuelo.costoVuelo}</CostoItem>
        <CostoItem>Costo de Maletas: {costosVuelo.costoMaletas}</CostoItem>
        <CostoItem>IVA: {costosVuelo.iva}</CostoItem>
        <CostoItem>Total: {costosVuelo.total}</CostoItem>
      </CostosVuelo>
    </div>
  );
};

export default ResumenReservacion;
