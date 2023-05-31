import React from "react";
import Error from "../images/404.gif"
import {Error404} from "./NotFoundPageStyled"

function NotFound() {
  return (
    <Error404>
      <img src={Error} alt="error" />
      <h1>¡La página que buscas no está disponible!</h1>
    </Error404>
  );
}

export default NotFound;
