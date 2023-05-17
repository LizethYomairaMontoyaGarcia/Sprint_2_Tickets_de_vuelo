import React from "react";
import { StyleHeaderForm } from './HeaderFormStyled';


export default function HeaderForm() {
  return (
    <StyleHeaderForm>
      <h1>Busca un nuevo destino y comienza la aventura.</h1>
      <p>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
      <button type="button">Viaje redondo</button>
      <button type="button">Viaje cencillo</button>
    </StyleHeaderForm>
  );
}
