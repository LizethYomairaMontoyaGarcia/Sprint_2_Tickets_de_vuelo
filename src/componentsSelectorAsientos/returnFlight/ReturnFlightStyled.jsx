import styled from "styled-components";

//asientos de puestos
export const BackSeats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

//TITULO DE REGRESO
export const SubtitleReturn = styled.div`
  margin-bottom: 10px;

`;

//fila de asientos
export const RowSeats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;

export const Column2Arrival = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AisleArrival = styled.div`
  height: 50px;
  width: 50px;
  color: black;
  background-color: white;
    border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 20px;
`;

//puesto de referencia
export const ReferencePost = styled.div`
  display: flex;
  justify-content: space-between;
  width: 400px;
  margin-bottom: 7px;
`;

//columnas
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

//boton de puesto de regreso
export const ReturnPostButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: #b9b9b9;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
`;
