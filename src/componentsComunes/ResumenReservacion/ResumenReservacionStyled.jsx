import styled from 'styled-components';

export const DetallesReservacion = styled.div`
    background-color: #fff;
    padding: 10px;
    margin-bottom: 20px;
    width: 310px;
    border-radius: 20px;
    margin-right: 20px;

    .codigos {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .linea {
      position: relative;
      width: 100px; /* Ajusta el ancho según tus necesidades */
      height: 1px; /* Ajusta el grosor de la línea según tus necesidades */
      background-color: black; /* Ajusta el color de la línea según tus necesidades */
      margin: 0 10px; /* Ajusta los márgenes según tus necesidades */
    }
    
    .linea::before,
    .linea::after {
      content: "";
      position: absolute;
      top: 0;
      width: 8px; /* Ajusta el tamaño de los puntos según tus necesidades */
      height: 8px; /* Ajusta el tamaño de los puntos según tus necesidades */
      background-color: black; /* Ajusta el color de los puntos según tus necesidades */
      border-radius: 50%;
    }
    
    .linea::before {
      top: -3px; /* Ajusta la posición vertical del segundo punto según tus necesidades */
      left: -4px; /* Ajusta la posición del primer punto según tus necesidades */
    }
    
    .linea::after {
      top: -3px; /* Ajusta la posición vertical del primer punto según tus necesidades */
      right: -4px; /* Ajusta la posición del segundo punto según tus necesidades */
    }

    .unidad{
    }

      .CostosVuelo {
        background-color: #ffffff;
        padding: 10px;
        margin-bottom: 20px;
        border-radius: 20px;
        margin-right: 20px;
      }
      
      /* Estilos para CostoItem */
      .CostoItem {
        margin: 5px 0;
      }   
`;

export const CostosVuelo = styled.div`
background-color: #ffffff;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    margin-right: 20px;
`;

export const CostoItem = styled.p`
margin: 5px 0;
`;

export const ResumenReservacionContainer = styled.div`
  /* Estilos adicionales para el contenedor principal de ResumenReservacion si es necesario */
`;
