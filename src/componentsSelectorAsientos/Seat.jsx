import React from "react";
import ExitFlight from "./exitFlight/ExitFlight";
import ReturnFlight from "./returnFlight/ReturnFlight";
import {
  DivInfoFlight,
  DivPadre,
  InfoFlight,
  InfoPrice,
  Promotion,
  Total,
  Title,
  Info,
  ButtonPaypal,
  ImgPaypal,
} from "./SeatStyled";
import { useNavigate } from "react-router-dom";
import Paypal from "../images/paypal.png";


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
        <Title>
          <h2>Tu Reservacion </h2>
        </Title>
        <InfoFlight>
          <p>
            Pasajero <strong>1 Adulto</strong>
          </p>
          <h3>Vuelo de salida</h3>
          <h2>MEX ____ CUL </h2>
          <p>05:45 PM _____06:47 PM</p>
          <p>Martes, 30 novimbre, 2023</p>
          <h3>Vuelo de regreso</h3>
          <h2>CUL ____ MEX </h2>
          <p>05:45 PM _____06:47 PM</p>
          <p>Miercoles, 05 diciembre, 2023</p>
        </InfoFlight>

        <div>
          <Title>
            <h2>Costo de vuelo</h2>
          </Title>
          <InfoPrice>
            <p>Tarifa base ---------------------$200.000</p>
            <Promotion>Descunento Promocional ----$0</Promotion>
            <Promotion>Descuento promocional 2 ---$0 </Promotion>
            <p>Tarifa base con descuento ---$0</p>
            <p>IVA Tarifa ---------------------$0</p>
            <div>
              <strong>TOTAL ------------------------$200.000</strong>
            </div>
          </InfoPrice>
        </div>

        <div>
          <Title>
            <h2>Servicios opcionales</h2>
          </Title>
          <Info>
            <p>Selecciona tu asiento de salida --------- A1</p>
            <p>Selecciona tu asiento de Retorno ------ A1</p>
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
