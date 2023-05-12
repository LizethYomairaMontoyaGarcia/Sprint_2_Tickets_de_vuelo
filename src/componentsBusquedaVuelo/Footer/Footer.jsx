import React from "react";
import { ContainerFooter } from "./FooterStyles";
import { ContainerImg } from "./FooterStyles";
import { Position } from "./FooterStyles";
import { footerInfo } from "../../data/data";

const Footer = () => {
  return (
    <ContainerFooter>
      <h1>Servicios disponibles</h1>
      <Position>
        {footerInfo.map((item) => (
          <ContainerImg key={item.id}>
            <figure>
              <img src={item.img} alt={item.name} />
            </figure>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </ContainerImg>
        ))}
      </Position>
    </ContainerFooter>
  );
};

export default Footer;
