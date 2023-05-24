import styled from "styled-components";

export const DivStyledReturn = styled.div`
  padding: 30px;
`;

export const StyledReturn = styled.div`
  margin-bottom: 1rem;

  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
    font-size: 2.5rem;
  }
  h2 {
    margin-bottom: 0.5rem;
    font-size: 1.7rem;
  }
  h4 {
    color: rgb(119, 116, 116);
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
export const ContainerReturn = styled.div`
  display: flex;
  align-items: center;
  width: 950px;
`;
export const ButtonReturn = styled.button`
  border-radius: 15px;
  border: 1px solid #9e1071;
  background-color: transparent;
  padding: 10px 16px;
  margin-top: 1rem;
  margin-left: auto;
  font-size: 16px;
  font-weight: bold;
  width: 180px;
  color: #9e1071;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #9e1071;
    cursor: pointer;
    color: white;
  }
`;

//asientos de puestos
export const Seats = styled.div`
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
export const PositioNumbering = styled.button`
  height: 50px;
  width: 50px;
  color: black;
  background-color: white;
  border-color: #bebdbd;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 20px;
`;

export const PositioNumberingSpace = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
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
export const ColumnReturn = styled.div`
  display: flex;
  flex-direction: column;
`;

//boton de puesto de salida
export const ReturnPostButton = styled.button`
  height: 50px;
  width: 50px;
  background-color: #b9b9b9;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

//no quiere centrar el texto
export const ExitStandard = styled.h3`
 align-items:center;
 display:flex;
 text-align:center;
`;
