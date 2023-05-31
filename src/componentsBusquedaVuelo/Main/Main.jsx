import React from "react";
import Amex from "../../images/amex.svg";
import Paypal from "../../images/paypal.svg";
import Invex from "../../images/invex.svg";
import Mastercard from "../../images/mastercard.svg";
import Visa from "../../images/visa.svg";
import Oxxo from "../../images/oxxo.svg";
import Seven from "../../images/seven.svg";
import Walrmat from "../../images/walmart.svg";
import Famahorro from "../../images/famahorro.svg";
import { PaymentMethods } from "./StylesMain";
import { ImgPay } from "./StylesMain";
import { ContainerMain } from "./StylesMain";
import { Title } from "./StylesMain";

function Main() {
  return (
    <ContainerMain>
      <Title>Pago seguro</Title>
      <PaymentMethods>
        <div>
          <p>Tarjeta de crédito, tarjeta de débito y pago electrónico</p>
          <ImgPay>
            <img src={Amex} alt="amex" />
            <img src={Paypal} alt="paypal" />
            <img src={Invex} alt="invex" />
            <img src={Mastercard} alt="mastercard" />
            <img src={Visa} alt="visa" />
          </ImgPay>
        </div>

        <div>
          <p>Efectivo en cualquiera de las surcusales participantes</p>
          <ImgPay>
            <img src={Oxxo} alt="oxxo" />
            <img src={Seven} alt="seven" />
            <img src={Walrmat} alt="walrmat" />
            <img src={Famahorro} alt="famahorro" />
          </ImgPay>
        </div>
      </PaymentMethods>
    </ContainerMain>
  );
}

export default Main;
