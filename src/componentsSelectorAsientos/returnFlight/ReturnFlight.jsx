import React, { useEffect, useState, useContext }  from "react";
import {
  DivStyledReturn,
  StyledReturn,
  ContainerReturn,
  ButtonReturn,
  PositioNumbering,
  PositioNumberingSpace,
  Seats,
  ColumnReturn,
  ReferencePost,
  RowSeats,
  SubtitleReturn,
  ReturntStandar,
} from "./ReturnFlightStyled";
import { useNavigate } from "react-router-dom";
import { searchParamsContext } from "../../routes/AppRoutes";
import axios from "axios";

const ReturnFlight = () => {
  const navigate = useNavigate();

  const handleButtonReturn = () => {
    console.log("entre");
    navigate("/");
  };

  const { setSelectedPassengers } = useContext(searchParamsContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://colorful-rustic-network.glitch.me/seatsReturn");
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
          "https://colorful-rustic-network.glitch.me/seatsReturn",
          newSeat
        );
        const createdSeat = response.data;
        setSeats([...seats, createdSeat]);
        //guardar en el sesion storage
        increasePassengerCount();
        sessionStorage.setItem(
          "selectedSeatsReturn",
          JSON.stringify([...seats, createdSeat])
        );
      } catch (error) {
        console.error("Error al guardar el asiento se salida:", error);
      }
    }
  };

  const ReturnSeats = () => {
    //filas
    const rows = 10;
    //columnas
    const columns = 6;

    const renderSeats = () => {
      const seatsArray = [];
      for (let index = 0; index < rows; index++) {
        const arrayRows = [];

        for (let position = 0; position < columns; position++) {
          const specialColumn = position === 2;
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
        <ReturnSeats/>
        </Seats>
      </DivStyledReturn>
    </>
  );
};

export default ReturnFlight;
