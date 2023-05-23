import React from "react";
import { HeaderComponet } from "./HeaderStyled";
import { ImgVuelo } from "./HeaderStyled";
import HeaderForm from "../HeaderForm/HeaderForm";
import vueloAirport from "../../images/vuelo_aeropuerto.jpg";

const Header = () => {
  return (
    <HeaderComponet>
      <HeaderForm />
      <figure>
        <ImgVuelo src={vueloAirport} alt="" />
      </figure>
    </HeaderComponet>
  );
};

export default Header;
