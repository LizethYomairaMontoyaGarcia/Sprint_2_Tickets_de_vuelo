import React from "react";
import { ContainerFooter } from "./FooterStyles";
import { ContainerImg } from "./FooterStyles";
import { Position } from "./FooterStyles";
import { H1 } from "./FooterStyles";
import { footerInfo } from "../../data/data";

const Footer = () => {
  return (
    <ContainerFooter>
      <H1>Servicios disponibles</H1>
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
