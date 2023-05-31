import React from 'react';
import {
  ResumenVueloContainer,
  ResumenVueloTitle,
  ResumenVueloItem,
} from './ResumenVueloStyled';
import { Link } from 'react-router-dom';


const ResumenVuelo = () => {
  // Obtener los datos del sessionStorage
  const nombre = sessionStorage.getItem('nombre');
  const apellidos = sessionStorage.getItem('apellidos');
  const tarjeta = sessionStorage.getItem('tarjeta');

  // Obtener el total del localStorage
  const totalGuardado = localStorage.getItem("total");
  const totalPasajeros = localStorage.getItem("xpasajeros");

  const totalNumerico = parseFloat(totalGuardado.replace("$", ""));
  const totalAPagar = totalPasajeros * totalNumerico;


  //Info del session
  return (
    <ResumenVueloContainer>
      <ResumenVueloTitle>Resumen del Vuelo</ResumenVueloTitle>
      <ResumenVueloItem>Nombre: {nombre}</ResumenVueloItem>
      <ResumenVueloItem>Apellidos: {apellidos}</ResumenVueloItem>
      <ResumenVueloItem>Número de Tarjeta: {tarjeta}</ResumenVueloItem>
      <ResumenVueloItem>Total a pagar: ${totalAPagar}</ResumenVueloItem>
      {/* Otros elementos del resumen del vuelo */}
      <Link to="/"
            style={{
          borderRadius: '20px',
          border: '1px solid #9e1071',
          textDecoration: 'none', // Establecer textDecoration en none
          backgroundColor: 'transparent',
          padding: '18px 18px',
          marginTop: '2rem',
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
  Comprar de nuevo</Link>
    </ResumenVueloContainer>
  );
};

export default ResumenVuelo;
