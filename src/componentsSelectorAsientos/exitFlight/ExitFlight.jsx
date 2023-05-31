import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  DivStyledExit,
  StyledExit,
  ContainerExit,
  ButtonExit,
  Seats,
  SubtitleReturn,
  RowSeats,
  PositioNumbering,
  PositioNumberingSpace,
  ReferencePost,
  ColumnExit,
  ExitStandard,
} from "./ExitFlightStyled";
import { useNavigate } from "react-router-dom";
import { searchParamsContext } from "../../routes/AppRoutes";

const ExitFlight = () => {
  const navigate = useNavigate();

  const handleButtonExit = () => {
    console.log("entre");
    navigate("/");
  };

  const { setSelectedPassengers } = useContext(searchParamsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/seatsSalida");
        const seatsData = response.data.map((seat) => ({
          id: seat.id,
          status: seat.status,
          selected: seat.status.selected,
        }));
        setSeats(seatsData);
      } catch (error) {
        console.error("Error al obtener los asientos:", error);
      }
    };

    fetchData();
  }, []);

  const [seats, setSeats] = useState([]);
  //este se ejecuta para cuanso se selecione un asiento
  const handleSeatSelection = async (codeSeat) => {
    const increasePassengerCount = (type) => {
      setSelectedPassengers((prevPassengers) => ({
        ...prevPassengers,
        [type]: prevPassengers[type] + 1,
      }));
    };

    //para cuando se selecione la silla en el db.json se guarde asi: selected: true
    if (!seats.some((seat) => seat.id === codeSeat)) {
      const newSeat = { id: codeSeat, status: { selected: true } };

      try {
        const response = await axios.post(
          "http://localhost:3000/seatsSalida",
          newSeat
        );
        const createdSeat = response.data;
        setSeats([...seats, createdSeat]);
        //guardar en el sesion storage
        increasePassengerCount();
        sessionStorage.setItem(
          "selectedSeatsExit",
          JSON.stringify([...seats, createdSeat])
        );
      } catch (error) {
        console.error("Error al guardar el asiento se salida:", error);
      }
    }
  };

  const ExitSeats = () => {
    //filas
    const rows = 10;
    //columnas
    const columns = 6;
    //generar la interfaz de los asientos
    const renderSeats = () => {
      const seatsArray = [];
      for (let index = 0; index < rows; index++) {
        const arrayRows = [];

        for (let position = 0; position < columns; position++) {
          const specialColumn = position === 2;
          //convertir un numero a un caracter
          const codeSeat = `${String.fromCharCode(65 + position)}${index + 1}`;
          //puesto seleccionado
          const selected = seats.some((seat) => seat.id === codeSeat);
          arrayRows.push(
            <button
              onClick={() => handleSeatSelection(codeSeat)}
              style={{
                marginRight: specialColumn ? "50px" : "10px",
                width: "50px",
                height: "50px",
                border: "none",
                borderRadius: "5px",
                marginBottom: "10px",
                backgroundColor: selected ? "#4b6ecf" : "#cecece",
                cursor: "pointer",
              }}
              key={position}
            >
              {codeSeat}
            </button>
          );
        }
        seatsArray.push(arrayRows);
      }

      return seatsArray;
    };

    return <div>{renderSeats()}</div>;
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
          <ExitSeats />
        </Seats>
      </DivStyledExit>
    </>
  );
};

export default ExitFlight;
