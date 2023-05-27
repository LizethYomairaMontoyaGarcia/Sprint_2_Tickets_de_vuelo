import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {
  H2l,
  ModalOriginCity,
  Modal,
  ModalContent,
  CloseIcon,
  ModalTitleCity,
  SearchContainer,
  SearchInput,
  SearchIcon,
  ListCity,
  ItemCity,
} from "./OriginCitystyled";
import axios from "axios";

const Origin = () => {
  useEffect(() => {
    const fetchDataOrigin = async () => {
      try {
        const response = await axios.get("http://localhost:3000/origins");
        setCities(
          response.data.map((item) => item.departure_airport.city)
        );
        console.log("Respuesta del servidor:", response.data);
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };

    fetchDataOrigin();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    // Obtener el valor guardado en el Session Storage al cargar el componente
    const storedCity = sessionStorage.getItem("selectedCityOrigin");
    if (storedCity) {
      setSelectedCity(storedCity);
    }
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCityClick = (city) => {
    setSelectedCity(city);
    sessionStorage.setItem("selectedCityOrigin", city); // Guardar el valor en el Session Storage
    closeModal();
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div onClick={openModal}>
        {selectedCity ? (
          <H2l>Ciudad de {selectedCity}</H2l>
        ) : (
          <H2l>Selecciona una ciudad</H2l>
        )}
      </div>

      {showModal && (
        <ModalOriginCity>
          <Modal>
            <ModalContent>
              <ModalTitleCity>Punto de partida</ModalTitleCity>
              <CloseIcon onClick={closeModal}>
                <AiOutlineClose size={24} />
              </CloseIcon>
            </ModalContent>

            <SearchContainer>
              <SearchIcon>
                <FaSearch size={20} />
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
        </ModalOriginCity>
      )}
    </>
  );
};

export default Origin;