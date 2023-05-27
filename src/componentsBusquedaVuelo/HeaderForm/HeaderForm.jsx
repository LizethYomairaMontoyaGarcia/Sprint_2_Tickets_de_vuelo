import React from "react";
import { StyleHeaderForm } from "./HeaderFormStyled";
import { Formulario } from "../Formulario/FormularioFlight";
import { P, H1, DIV, StyledButtonForm } from "./HeaderFormStyled";
import styled from "styled-components";

const ButtonGeneral = styled.button`
  background-color: ${(props) => (props.active ? "purple" : "White")};
  color: ${(props) => (props.active ? "White" : "dark")};
  border-radius: 4px;
  border: none;
  padding: 10px 10px;
  font-size: 1rem;
`;

export default function HeaderForm() {
  const [viaje, setViaje] = React.useState("redondo");

  return (
    <DIV>
      <StyleHeaderForm>
        <H1>Busca un nuevo destino y comienza la aventura.</H1>
        <P>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</P>
        <StyledButtonForm>
          <ButtonGeneral
            active={viaje === "redondo"}
            onClick={() => setViaje("redondo")}
          >
            Viaje Redondo
          </ButtonGeneral>
          <ButtonGeneral
            active={viaje === "sencillo"}
            onClick={() => setViaje("sencillo")}
          >
            Viaje Sencillo
          </ButtonGeneral>
        </StyledButtonForm>
        <Formulario viaje={viaje} />
      </StyleHeaderForm>
    </DIV>
  );
}
