import React from "react";
import ExitFlight from "./exitFlight/ExitFlight";
import ReturnFlight from "./returnFlight/ReturnFlight";
import {
  DivInfoFlight,
  DivPadre,
  Total,
  Title,
  Info,
  ButtonPaypal,
  ImgPaypal,
} from "./SeatStyled";
import { useNavigate } from "react-router-dom";
import Paypal from "../images/paypal.png";
import ResumenReservacion from "../componentsComunes/ResumenReservacion/ResumenReservacion";

function Seat() {
  //para redirijir a la pagina de pago
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/pay");
  };

  return (
    <DivPadre>
      <div>
        <ExitFlight />
        <ReturnFlight />
      </div>

      <DivInfoFlight>
        <div>
          <ResumenReservacion />
        </div>

        <div>
          <Title>
            <h2>Servicios opcionales</h2>
          </Title>
          <Info>
            <p>Selecciona tu asiento de salida --------- $0</p>
            <p>Selecciona tu asiento de Retorno ------ $0</p>
          </Info>
        </div>

        <Total>
          <h3>TOTAL ------------------$200.000</h3>
        </Total>

        <ButtonPaypal type="button" onClick={() => handleButton()}>
          <ImgPaypal src={Paypal} alt="paypal" /> Pagar con Paypal
        </ButtonPaypal>
      </DivInfoFlight>
    </DivPadre>
  );
}

export default Seat;
