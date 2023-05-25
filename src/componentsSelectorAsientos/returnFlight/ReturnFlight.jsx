import React from "react";
import {
  DivStyledReturn,
  StyledReturn,
  ContainerReturn,
  ButtonReturn,
  PositioNumbering,
  PositioNumberingSpace,
  Seats,
  ReturnPostButton,
  Column2Arrival,
  ColumnReturn,
  ReferencePost,
  RowSeats,
  SubtitleReturn,
  ReturntStandar,
} from "./ReturnFlightStyled";
import { useNavigate } from "react-router-dom";

const ReturnFlight = () => {
  const navigate = useNavigate();

  const handleButtonReturn = () => {
    console.log("entre");
    navigate("/");
  };

  return (
    <>
      <DivStyledReturn>
        <StyledReturn>
          <ContainerReturn>
            <h1>Vuelo de Regreso</h1>
            <ButtonReturn type="button" onClick={() => handleButtonReturn()}>
              Cambiar vuelo
            </ButtonReturn>
          </ContainerReturn>
          <h2>Miercoles 8 dic 2023</h2>
          <h4>Culiacan a cd. mex(ADZ)</h4>
          <p>Selecciona tus Asientos</p>
        </StyledReturn>

        <ReferencePost>
          <ColumnReturn>
            <RowSeats>
              <PositioNumbering>A</PositioNumbering>
              <PositioNumbering>B</PositioNumbering>
              <PositioNumbering>C</PositioNumbering>
            </RowSeats>
          </ColumnReturn>
          <ColumnReturn>
            <PositioNumberingSpace></PositioNumberingSpace>
          </ColumnReturn>
          <ColumnReturn>
            <RowSeats>
              <PositioNumbering>D</PositioNumbering>
              <PositioNumbering>E</PositioNumbering>
              <PositioNumbering>F</PositioNumbering>
            </RowSeats>
          </ColumnReturn>
        </ReferencePost>
        <SubtitleReturn>
          <ReturntStandar>Salida Rapida</ReturntStandar>
        </SubtitleReturn>
        <Seats>
          <ColumnReturn>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
          </ColumnReturn>
          <Column2Arrival>
            <PositioNumbering>1</PositioNumbering>
            <PositioNumbering>3</PositioNumbering>
            <PositioNumbering>4</PositioNumbering>
            <PositioNumbering>2</PositioNumbering>
            <PositioNumbering>5</PositioNumbering>
          </Column2Arrival>
          <ColumnReturn>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
          </ColumnReturn>
        </Seats>
        <SubtitleReturn>
          <ReturntStandar>Estándar</ReturntStandar>
        </SubtitleReturn>
        <Seats>
          <ColumnReturn>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
          </ColumnReturn>
          <Column2Arrival>
            <PositioNumbering>6</PositioNumbering>
            <PositioNumbering>7</PositioNumbering>
            <PositioNumbering>8</PositioNumbering>
            <PositioNumbering>9</PositioNumbering>
            <PositioNumbering>10</PositioNumbering>
          </Column2Arrival>
          <ColumnReturn>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
            <RowSeats>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
              <ReturnPostButton></ReturnPostButton>
            </RowSeats>
          </ColumnReturn>
        </Seats>
      </DivStyledReturn>
    </>
  );
};

export default ReturnFlight;
