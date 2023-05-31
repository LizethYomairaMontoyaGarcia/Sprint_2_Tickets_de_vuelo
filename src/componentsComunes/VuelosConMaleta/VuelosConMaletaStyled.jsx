import styled, { css } from 'styled-components';

export const VuelosConMaletasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

export const HorariosList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  width: 800px; /* Establecer el ancho fijo */
`;


export const HorarioItem = styled.li`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding:10px;
  border-radius:20px;

  .vuelo1{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vuelo2{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .centro {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .centro > div:not(:last-child) {
    margin-bottom: 5px;
  }
  
  .centro > div:not(:first-child) {
    margin-top: 5px;
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
`;

export const MaletasList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
`;

export const MaletaItem = styled.button`
  width: 150px; /* Establecer el ancho fijo */
  margin-right: 8px;
  cursor: pointer;
  border: 1px solid #666;
  background-color: #fff;
  color: #000;
  font-size: 14px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius:10px;

  ${props =>
    props.active &&
    css`
      background-color: #b40072;
      color: #fff;
    `}
`;


export const MaletaImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const MaletaPrice = styled.span`
  font-size: 12px;
  margin-top: 4px;
`;

