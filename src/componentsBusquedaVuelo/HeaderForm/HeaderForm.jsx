import React from "react";
import { StyleHeaderForm } from './HeaderFormStyled';
import { Formulario } from "../Formulario/FormularioFlight";
import {ButtonGeneral, P, H1, DIV} from "./HeaderFormStyled"


export default function HeaderForm() {
  return (
    <DIV>
    <StyleHeaderForm>
      <H1>Busca un nuevo destino y comienza la aventura.</H1>
      <P>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</P>
      <ButtonGeneral  type="button">Viaje redondo</ButtonGeneral >
      <ButtonGeneral  type="button">Viaje cencillo</ButtonGeneral >
      <Formulario/>
    </StyleHeaderForm>
    </DIV>

  );
}
