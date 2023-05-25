import React from "react";
import {
  DivStyledExit,
  StyledExit,
  ContainerExit,
  ExitStandard,
  ButtonExit,
  PositioNumbering,
  PositioNumberingSpace,
  Seats,
  ExitPostButton,
  Column2Arrival,
  ColumnExit,
  ReferencePost,
  RowSeats,
  SubtitleReturn,
} from "./ExitFlightStyled";
import { useNavigate } from "react-router-dom";

const ExitFlight = () => {
  const navigate = useNavigate();

  const handleButtonExit = () => {
    console.log("entre");
    navigate("/");
  };

  return (
    <>
      <DivStyledExit>
        <StyledExit>
          <ContainerExit>
            <h1>Vuelo de Salida</h1>
            <ButtonExit type="button" onClick={() => handleButtonExit()}>
              Cambiar vuelo
            </ButtonExit>
          </ContainerExit>
          <h2>Martes 30 nov 2021</h2>
          <h4>Cd. Mexico a Culiacan(ADZ)</h4>
          <p>Selecciona tus Asientos</p>
        </StyledExit>

        <ReferencePost>
          <ColumnExit>
            <RowSeats>
              <PositioNumbering>A</PositioNumbering>
              <PositioNumbering>B</PositioNumbering>
              <PositioNumbering>C</PositioNumbering>
            </RowSeats>
          </ColumnExit>
          <ColumnExit>
            <PositioNumberingSpace></PositioNumberingSpace>
          </ColumnExit>
          <ColumnExit>
            <RowSeats>
              <PositioNumbering>D</PositioNumbering>
              <PositioNumbering>E</PositioNumbering>
              <PositioNumbering>F</PositioNumbering>
            </RowSeats>
          </ColumnExit>
        </ReferencePost>
        <SubtitleReturn>
          <ExitStandard>Salida Rapida</ExitStandard>
        </SubtitleReturn>
        <Seats>
          <ColumnExit>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
          </ColumnExit>
          <Column2Arrival>
            <PositioNumbering>1</PositioNumbering>
            <PositioNumbering>3</PositioNumbering>
            <PositioNumbering>4</PositioNumbering>
            <PositioNumbering>2</PositioNumbering>
            <PositioNumbering>5</PositioNumbering>
          </Column2Arrival>
          <ColumnExit>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
          </ColumnExit>
        </Seats>
        <SubtitleReturn>
          <ExitStandard>Estándar</ExitStandard>
        </SubtitleReturn>
        <Seats>
          <ColumnExit>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
          </ColumnExit>
          <Column2Arrival>
            <PositioNumbering>6</PositioNumbering>
            <PositioNumbering>7</PositioNumbering>
            <PositioNumbering>8</PositioNumbering>
            <PositioNumbering>9</PositioNumbering>
            <PositioNumbering>10</PositioNumbering>
          </Column2Arrival>
          <ColumnExit>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
            <RowSeats>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
              <ExitPostButton></ExitPostButton>
            </RowSeats>
          </ColumnExit>
        </Seats>
      </DivStyledExit>
    </>
  );
};

export default ExitFlight;
