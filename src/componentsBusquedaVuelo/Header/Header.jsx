import React from "react";
import { HeaderBac } from "./HeaderStyled";
import HeaderForm from "../HeaderForm/HeaderForm";

const Header = () => {
  return (
    <HeaderBac>
      <div>
        <HeaderForm />
      </div>
    </HeaderBac>
  );
};

export default Header;
