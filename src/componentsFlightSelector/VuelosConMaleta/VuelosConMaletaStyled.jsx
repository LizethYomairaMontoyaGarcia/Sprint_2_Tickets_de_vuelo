import styled from 'styled-components';

export const VuelosConMaletasContainer = styled.div`
  /* Estilos para el contenedor principal de VuelosConMaletas */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorariosList = styled.ul`
  /* Estilos para la lista de horarios de vuelo */
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
`;

export const HorarioItem = styled.li`
  /* Estilos para cada horario de vuelo */
  margin-bottom: 8px;
  display: flex;
  align-items: center; /* Centra verticalmente los elementos */
  background-color: #fff; /* Agrega un fondo blanco */
`;

export const MaletasList = styled.ul`
  /* Estilos para la lista de opciones de maletas */
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px; /* Agrega margen izquierdo para separar las maletas de los horarios */
`;

export const MaletaItem = styled.button`
  /* Estilos para cada opción de maleta */
  margin-right: 8px;
  cursor: pointer;
  border: 1px solid #666;
  background-color: ${props => (props.isSelected ? "#800080" : "#fff")};
  color: ${props => (props.isSelected ? "#fff" : "#000")};
  font-size: 14px;
  padding: 4px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MaletaImage = styled.img`
  /* Estilos para la imagen de la maleta */
  width: 50px;
  height: 50px;
`;

export const MaletaPrice = styled.span`
  /* Estilos para el precio de la maleta */
  font-size: 12px;
  margin-top: 4px;
`;
