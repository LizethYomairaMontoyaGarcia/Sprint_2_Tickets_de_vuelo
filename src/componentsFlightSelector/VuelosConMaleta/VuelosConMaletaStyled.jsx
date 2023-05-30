import styled, { css } from 'styled-components';

export const VuelosConMaletasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  ${props =>
    props.active &&
    css`
      background-color: #800080;
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