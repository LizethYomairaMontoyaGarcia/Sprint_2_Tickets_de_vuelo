import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  SpanDestination,
  H2,
  ModalDestinationCity,
  Modal,
  ModalContent,
  CloseIcon,
  ModalTitleDestinationCity,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ListCity,
  ItemCity,
} from "./DestinationStyled";
import axios from "axios";
import { searchParamsContext } from "../../../routes/AppRoutes";

const Destination = () => {
  //llamamos la onformacion que hay en el sesion storage del selectedCityOrigin y con esta informacion hacemos un mapero para poder pintar
  // la informacion de destinations que tiene este, en este caso city para que al usurio le despliegue la lista de cuidades y pueda selecionar una de ella
  const fetchDataDestination = async () => {
    try {
      const storedCityOrigin = sessionStorage.getItem("selectedCityOrigin");
      const response = await axios.get("http://localhost:3000/flights");

      if (storedCityOrigin) {
        const cities = response.data
          .filter((item) =>
            item.departure_airport.city
              .toLowerCase()
              .includes(storedCityOrigin.toLowerCase())
          )
          .map((item) =>
            item.destinations.map(
              (destinations) => destinations.arrival_airport.city
            )
          )
          .flat();

        setCities(cities);
      } else {
        setCities([]);
      }

      console.log("Respuesta del servidor del destino:", response.data);
    } catch (error) {
      console.error("Error en la petición del destino :", error);
    }
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedCityOrigin, setSelectedCityOrigin] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);
  //global
  const { selectedCityDestination, setSelectedCityDestination } =
    useContext(searchParamsContext);

  useEffect(() => {
    // Obtener el valor guardado en el Session Storage del origin
    const storedCityOrigin = sessionStorage.getItem("selectedCityOrigin");
    if (storedCityOrigin) {
      setSelectedCityOrigin(storedCityOrigin);
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCityClick = (city) => {
    setSelectedCityDestination(city);
    sessionStorage.setItem("selectedCityDestination", city); // Guardar el valor en el Session Storage
    closeModal();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div onClick={openModal}>
        {selectedCityDestination ? (
          <H2>Ciudad de {selectedCityDestination}</H2>
        ) : (
          <SpanDestination onClick={() => fetchDataDestination()}>
            ----
          </SpanDestination>
        )}
      </div>

      {showModal && (
        <ModalDestinationCity>
          <Modal>
            <ModalContent>
              <ModalTitleDestinationCity>
                ¿A dónde viajas?
              </ModalTitleDestinationCity>
              <CloseIcon onClick={closeModal}>
                <AiOutlineClose size={24} />
              </CloseIcon>
            </ModalContent>

            <SearchContainer>
              <SearchIcon>
                <FaSearch size={18} />
              </SearchIcon>
              <SearchInput
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchContainer>

            <ListCity>
              {cities
                .filter((city) =>
                  city.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((city) => (
                  <ItemCity key={city} onClick={() => handleCityClick(city)}>
                    {city}
                  </ItemCity>
                ))}
            </ListCity>
          </Modal>
        </ModalDestinationCity>
      )}
    </>
  );
};

export default Destination;
